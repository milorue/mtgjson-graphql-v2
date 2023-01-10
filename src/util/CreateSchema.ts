import {buildSchema} from 'type-graphql'
import RequestTokenChecker from "./auth/RequestTokenChecker";
const glob = require("resolve-glob");

// Windows Bug: buildSchema doesn't like backslashes
const path = `${__dirname}/../resolvers/**/*.resolver.{ts,js}`;
const resolvers = glob.sync(path).map((x: String) => x.replaceAll("\\", "/"));

export const createSchema = () => buildSchema({
    resolvers,
    emitSchemaFile: true,
    validate: { forbidUnknownValues: false },
    skipCheck: process.env.DEV_MODE !== "true",
    authChecker: RequestTokenChecker
})
