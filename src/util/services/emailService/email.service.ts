import * as nodemailer from "nodemailer"
import { emailAccount } from "./emailTypes"
import MTGLog from "../../../util/Logger"
const pkg = require("../../../../package.json")

const RELEASE = `mtgjson-graphql@${pkg.version}`

export const createTestEmailAccount = async(): Promise<nodemailer.TestAccount> => {
    let account = await nodemailer.createTestAccount()
    return account
}

export const sendTestEmail = async() => {
    let account = await createTestEmailAccount()
    
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: account.user,
            pass: account.pass
        }
    })

    try{
        let testEmail = await transporter.sendMail({
            from: account.user,
            to: "milorue@gmail.com",
            subject: "MTGJSON GraphQL Test Email",
            text: `This is a test of version: ${RELEASE} of MTGJSON GraphQL`,
            html: `<p>This is a test of version: ${RELEASE} of MTGJSON GraphQL</p>`
        })
        MTGLog.info(`Message sent successfully with id: ${testEmail.messageId}`)
        MTGLog.info(`Preview available here: ${nodemailer.getTestMessageUrl(testEmail)}`)
    }
    catch(err){
        MTGLog.error(`Error while attempting to send email: ${err}`)
    }
    
}

sendTestEmail()