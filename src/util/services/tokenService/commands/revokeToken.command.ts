import { connectDatabase } from "util/ConnectDatabase"
import { revokeAPIToken } from "../token.service"

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Revoke token for email: ", async(email: string) => {
    await connectDatabase()
    await revokeAPIToken(email)
    rl.close()
})

rl.on("close", () => {
    process.exit(0);
})