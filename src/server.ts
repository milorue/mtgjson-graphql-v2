require('dotenv').config()
import MTGLog from "./util/Logger"
import { connectDatabase } from "./util/ConnectDatabase"
import { DatabaseConfig } from "./types/DatabaseOptions"
import { createSchema } from "./util/CreateSchema"
import { ApolloServer } from "apollo-server"
import SetContext from './util/auth/SetContext'
// import {createSentry} from './util/Sentry'
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { scheduleTokenUsageReset } from "./util/services/tokenService/token.service"
const pkg = require("../package.json")
const RELEASE = `mtgjson-graphql@${pkg.version}`

MTGLog.info(`Starting ${RELEASE}`)
let DEV: boolean = process.env.DEV_MODE === "true"
const MODE = DEV ? "development" : "production"
MTGLog.info(`Running in ${MODE} mode`)

const runServer = async() => {
    try{
        // Sentry is currently not setup correctly for distribution
        //createSentry();
        try{
            await connectDatabase()
            MTGLog.info(`Connected to database successfully`)
        }
        catch(err){
            MTGLog.error(`Database error: ${err}`)
        }

        await scheduleTokenUsageReset()
        
        const schema = await createSchema()

        const server = new ApolloServer({
            schema,
            context: SetContext,
            cors: {
                credentials: true,
                origin: "*",
            },
            logger: {
                debug: msg => MTGLog.debug(msg),
                info: msg => MTGLog.info(msg),
                warn: msg => MTGLog.warn(msg),
                error: msg => MTGLog.error(msg),
            },
            formatError: (err): Error => {
                if(DEV){
                    MTGLog.error(JSON.stringify(err, null, 2));
                    return err
                }
                // go to a logging service of one's choice
                if(err.message.startsWith('Database Error: ')){
                    return new Error(`Internal server error please try again`)
                }
                return err
            },
            plugins: [
                ApolloServerPluginLandingPageGraphQLPlayground(),
                require('apollo-tracing').plugin()
            ]
        })

        const {url} = await server.listen({
            port: process.env.PORT || 8000,
            host: DEV ? "0.0.0.0" : undefined,
        })
        MTGLog.info(`Server listening: ${url}`)
    }
    catch(err){
        MTGLog.error(err)
    }
}
runServer()
