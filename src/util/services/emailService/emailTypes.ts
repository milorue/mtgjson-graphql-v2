import { TestAccount } from "nodemailer";

export interface emailAccount{
    account: TestAccount,
    address: string,
    website: string,
    password: string,
}

export interface emailContent{
    from: string,
    to: string,
    subject: string,
    text: string, // for plain text support
    html: any
}