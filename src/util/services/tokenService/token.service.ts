import {randomBytes} from 'crypto'
import { APITokenEntity } from '../../../entities/APIToken.entity'
import MTGLog from '../../../util/Logger'
const schedule = require('node-schedule')


export const generateAPIToken = async(): Promise<string> => {
    const key = randomBytes(20).toString("hex")
    return key
}

export const addAPIToken = async(email: string, tokenRateLimit?: number): Promise<string> => {
    // TODO clean input of email but for now its just admin use so its fine

    const key = await generateAPIToken();

    let apiToken = new APITokenEntity()
    apiToken.token = key
    apiToken.email = email
    if(tokenRateLimit){
        apiToken.rateLimit = tokenRateLimit
    }

    
    
    // persists the token the database
    try{
        await apiToken.save()
        MTGLog.info(`Added API Token for ${email} with a rate limit of ${tokenRateLimit ? tokenRateLimit : 500} with token string: ${key}`)
        return apiToken.token
    }
    catch(err){
        throw MTGLog.error(err)
    }
    
}

export const tokenUsageIncrement = async(token: string): Promise<boolean> => {
    const apiToken = await APITokenEntity.findOne({
        where: {
            token: token
        }
    })
    
    if(apiToken.rate < apiToken.rateLimit){
        apiToken.rate += 1
        apiToken.save()
        return true
    }
    else{
        MTGLog.warn(`Token rate limit has been reached for ${apiToken.email}`)
        return false
    }

}

export const scheduleTokenUsageReset = async() => {
    MTGLog.info(`Token Service Scheduler Online`)
    // the inner function can be changed to the already existing token function if it's better
    // currently implemented custom function cause I am unfamiliar with the scheduler and wanted more control over what's run
    // If this proves reliable than we can try the existing functions for the token service.

    // Runs every hour
    let job = schedule.scheduleJob(`0 * * * *`, async() => {
        let tokensQuery = APITokenEntity.createQueryBuilder()
        .getMany()
        
        let tokens = await tokensQuery

        MTGLog.info(`Running scheduled token rate usage reset @ ${new Date().toString()}`)
        try{
            tokens.map((token) => {
                token.rate = 0
                token.save()
            })
            MTGLog.info(`Scheduled token usage reset successful`)
        }
        catch(err){
            MTGLog.error(`Error while resetting tokens: ${err}`)
        }
        
        
    })
}

export const resetAllTokenUsage = async(): Promise<boolean> => {
    const apiTokens = await APITokenEntity.find()

    // this is most likely inefficient and should probably use queryBuilder but I'm being
    // lazy today and I'll fix it if needed
    try{
        apiTokens.map((token) => {
            token.rate = 0
            token.save()
        })
        MTGLog.info(`Successfully reset all token's usage to 0`)
        return true
    }catch(err){
        MTGLog.error(`Error while resetting all token usage: ${err}`)
        return false
    }
}

export const resetTokenUsage = async(email?: string, token?: string): Promise<boolean> => {
    if(email){
        const apiToken = await APITokenEntity.findOne({
            where: {
                email: email
            }
        })
        if(!apiToken){
            MTGLog.error(`Token doesn't exist for ${email}`)
            return false
        }
        apiToken.rate = 0
        apiToken.save()
        MTGLog.info(`Reset token for email: ${email} rate to 0`)
        return true
    }
    else if(token){
        const apiToken = await APITokenEntity.findOne({
            where: {
                token: token
            }
        })

        if(!apiToken){
            MTGLog.error(`Token entity doesn't exist with string: ${token}`)
            return false
        }
        apiToken.rate = 0
        apiToken.save()
        MTGLog.info(`Reset token: ${token} rate to 0`)
        return false
    }
    else{
        MTGLog.error(`An error occurred, either you didn't provide an argument or another error occurred...`)
        return false
    }
}


// validates a provided token against the database
export const validateAPIToken = async(token: string): Promise<boolean> => {
    const apiToken = await APITokenEntity.findOne({
        where: {
            token: token
        }
    })
    if(apiToken){
        return true
    } else{
        return false
    }
}

export const revokeAPIToken = async(email: string): Promise<void> => {
    const token = await APITokenEntity.findOne({
        where: {
            email: email 
        }
    })

    if(token){
        MTGLog.info(`Revoking token for ${token.email}`)
        try{
            await APITokenEntity.createQueryBuilder("token")
            .delete()
            .where("email = :email", { email: email})
            .execute()
        }
        catch(err){
            MTGLog.error(`Error while revoking token: ${err}`)
        }
    }
    else{
        MTGLog.error(`A token doesn't exist for the given email address`)
    }
} 