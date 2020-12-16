import { connectDatabase } from "util/ConnectDatabase"
import MTGLog from "util/Logger"

const ingestSets = async() => {
    try{
        await connectDatabase()
        MTGLog.info(`Connected to database successfully`)
        MTGLog.info(`Running ingestSets command...`)
    }
    catch(err){
        MTGLog.error(`Database error: ${err}`)
    }

    try{
        
    }
    catch(err){
        MTGLog.error(err)
    }
}