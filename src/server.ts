import {startStandaloneServer} from "@apollo/server/standalone";
import "reflect-metadata";
require('dotenv').config()
import MTGLog from "./util/Logger"
import { connectDatabase } from "./util/ConnectDatabase"
import { createSchema } from "./util/CreateSchema"
import { scheduleTokenUsageReset } from "./util/services/tokenService/token.service"
import {ApolloServer} from "@apollo/server";
import {GraphQLFormattedError} from "graphql/error";
import {ApolloServerPluginLandingPageGraphQLPlayground} from "@apollo/server-plugin-landing-page-graphql-playground";
import { ApolloServerPluginInlineTrace } from '@apollo/server/plugin/inlineTrace';
import SetContext from "./util/auth/SetContext";
const pkg = require("../package.json")
const RELEASE = `mtgjson-graphql@${pkg.version}`

MTGLog.info(`Starting ${RELEASE}`)
let DEV: boolean = process.env.DEV_MODE === "true"
const MODE = DEV ? "development" : "production"
MTGLog.info(`Running in ${MODE} mode`)

const runServer = async() => {
    try{
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
            logger: {
                debug: msg => MTGLog.debug(msg),
                info: msg => MTGLog.info(msg),
                warn: msg => MTGLog.warn(msg),
                error: msg => MTGLog.error(msg),
            },
            formatError: (graphQLFormattedError, _): GraphQLFormattedError => {
                if(DEV){
                    MTGLog.error(JSON.stringify(graphQLFormattedError, null, 2));
                }
                return graphQLFormattedError;
            },
            plugins: [
                ApolloServerPluginLandingPageGraphQLPlayground(),
                ApolloServerPluginInlineTrace()
            ]
        })

        const {url} = await startStandaloneServer(server, {
            context: SetContext,
            listen: {
                port: +process.env.PORT || 8000,
                host: DEV ? "0.0.0.0" : undefined
            }
        })
        MTGLog.info(`Server listening: ${url}`)
    }
    catch(err){
        MTGLog.error(err)
    }
}
runServer().then(() => 0)
