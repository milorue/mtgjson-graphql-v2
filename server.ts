require('dotenv').config()
import MTGLog from "./src/util/Logger"
import { connectDatabase } from "./src/util/ConnectDatabase"
import { DatabaseConfig } from "./src/types/DatabaseOptions"
import { createSchema } from "./src/util/CreateSchema"
import { ApolloServer } from "apollo-server"
import SetContext from './src/util/auth/SetContext'
import {createSentry} from './src/util/Sentry'
import { scheduleTokenUsageReset } from "./src/util/services/tokenService/token.service"

const pkg = require("./package.json")
const RELEASE = `mtgjson-graphql@${pkg.version}`

MTGLog.info(`Starting ${RELEASE}`)

const DEV: boolean = Boolean(process.env.DEV_MODE)
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
            playground: DEV,
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
            tracing: DEV,
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
