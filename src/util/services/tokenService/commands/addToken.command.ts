const readline = require("readline")
import { addAPIToken } from '../token.service'
import { connectDatabase } from '../../../../util/ConnectDatabase'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("Email for token: ", async (email: string) => {

    await connectDatabase()
    await addAPIToken(email)
    rl.close()
})

rl.on("close", () => {
    process.exit(0);
})