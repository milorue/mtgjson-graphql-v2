import { TestAccount } from "nodemailer";

export interface emailAccount{
    account: TestAccount,
    address: string,
    website: string,
    password: string,
}