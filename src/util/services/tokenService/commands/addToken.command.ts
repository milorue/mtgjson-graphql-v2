const readline = require("readline")
import { addAPIToken } from '../token.service'
import { connectDatabase } from '../../../../util/ConnectDatabase'
import { sendConfirmationEmail } from '../../../../util/services/emailService/email.service'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("Email for token: ", async (email: string) => {

    await connectDatabase()
    let token = await addAPIToken(email)
    await sendConfirmationEmail(token, email)
    rl.close()
})

rl.on("close", () => {
    process.exit(0);
})