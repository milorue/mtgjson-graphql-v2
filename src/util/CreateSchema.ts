import {buildSchema} from 'type-graphql'
import RequestTokenChecker from './auth/RequestTokenChecker'
import { join } from 'path'

// dynamically finds all resolvers
const resolvers = join(__dirname + "../../resolvers/") + "**/*.resolver"

export const createSchema = () => buildSchema({
    resolvers: [
        `${resolvers}.js`, `${resolvers}.ts`
    ],
    authChecker: RequestTokenChecker,
    skipCheck: process.env.DEV_MODE !== "true",
    validate: false,
})