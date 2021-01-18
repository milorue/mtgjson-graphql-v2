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
            subject: `MTGGraphQL Token`,
            text: `Thank you for supporting MTGJSON, you're API token is ${token}`,
            html: `
            <h3>Thank you for supporting MTGJSON through Patreon!</h3>
            <p>Because of your support, we have not only been able to maintain active development of MTGJSON, but we have also been able to work on new projects. We would like to introduce you to our latest project, MTGGraphQL, a sub-service of MTGJSON. We created MTGGraphQL with the goal of reducing the amount of unnecessary data retrieved and empowering clients with the power to ask for exactly what MTGJSON data they need and nothing more. We hope you find MTGGraphQL useful for your current and future projects.</p>
            <p>If you have any issues with the service feel free to reach out on <a href="https://mtgjson.com/discord">discord</a> in the #mtgjson-gql channel or email me personally at zach@mtgjson.com. As a reminder, for supporting us on Patreon you get "red phone" access to the MTGJSON team.</p>
            <p>Thanks, <br/> Zach & The MTGJSON Team </p>
            <hr></hr>
            <p>You're API token is ${token}</p>
            <p>https://mtgjson.com/graphql</p>
            <p>API Rate limits apply and are currently at 500 requests/hr per token with 1000 requests/hr per IP address. These are subject to change based on demand and usage of the API. If you need to reset your API key, for any reason, please reach out.</p>
            `
        }
        
    
        let messageInfo = await transporter.sendMail(mailContent)
        MTGLog.info(`Confirmation email was sent for ${recipient} with message id: ${messageInfo.messageId}`)
    }
    catch(err){
        MTGLog.error(err)
    }
}
