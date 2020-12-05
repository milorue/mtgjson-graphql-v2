import {buildSchema} from 'type-graphql'
import StatusResolver from '../resolvers/status.resolver'
import RequestTokenChecker from './auth/RequestTokenChecker'
import CardResolver from '../resolvers/card/Card.resolver'

export const createSchema = () => buildSchema({
    resolvers: [
        StatusResolver,
        CardResolver
    ],
    authChecker: RequestTokenChecker,
    skipCheck: process.env.DEV_MODE !== "true",
})