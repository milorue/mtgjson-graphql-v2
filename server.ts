require('dotenv').config()
import MTGLog from "./src/util/Logger"
import { connectDatabase } from "./src/util/ConnectDatabase"
import { DatabaseConfig } from "./src/types/DatabaseOptions"
import { createSchema } from "./src/util/CreateSchema"
import { ApolloServer } from "apollo-server"
import SetContext from './src/util/auth/SetContext'
import { scheduleTokenUsageReset } from "./src/util/services/tokenService/token.service"

const pkg = require("./package.json")
const RELEASE = `mtgjson-graphql@${pkg.version}`

MTGLog.info(`Starting ${RELEASE}`)

const DEV: boolean = Boolean(process.env.DEV_MODE)
const MODE = DEV ? "development" : "production"
MTGLog.info(`Running in ${MODE} mode`)

const runServer = async() => {
    try{
        const dbArgs: DatabaseConfig = {
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            username: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_DATABASE
        }
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
                return err
            }
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
