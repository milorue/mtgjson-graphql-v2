require('dotenv').config()
import * as nodemailer from "nodemailer"
import { emailAccount, emailContent } from "./emailTypes"
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
            to: "mtgraphql@gmail.com",
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

export const sendConfirmationEmail = async(token: string, recipient: string) => {
    try{
        let transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT) || 0,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        })
    
        let mailContent: emailContent = {
            from: process.env.EMAIL_USER,
            to: recipient,
            subject: `MTGJSON GraphQL Token`,
            text: `Welcome to MTGJSON's GraphQL Service. You're API token is ${token}`,
            html: `
            <h3>Welcome to MTGJSON's GraphQL Service</h3>
            <br></br>
            <p>You are currently using version: ${RELEASE} of MTGJSON GraphQL</p>
            <p>You're api token is ${token}</p>`
        }
        
    
        let messageInfo = await transporter.sendMail(mailContent)
        MTGLog.info(`Confirmation email was sent for ${recipient} with message id: ${messageInfo.messageId}`)
    }
    catch(err){
        MTGLog.error(err)
    }
}
