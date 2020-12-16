import { getAllPrintings, getSetList } from "./APIOperators"
import { cardIngest } from "./Card.ingest"
import MTGLog from "../Logger"
import { CardEntity } from "../../entities/Card.entity"
import { connectDatabase } from "../../util/ConnectDatabase"
import ingestCards from "./commands/IngestCards"



const databaseIngest = async () => {
    try{
        await connectDatabase()
        MTGLog.info(`Connected to database successfully`)
    }
    catch(err){
        MTGLog.error(`Database error: ${err}`)
    }

    ingestCards()
    
}

databaseIngest()

export default databaseIngest