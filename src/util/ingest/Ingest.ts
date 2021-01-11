import { getAllPrintings, getSetList } from "./APIOperators"
import { cardIngest } from "./Card.ingest"
import MTGLog from "../Logger"
import { CardEntity } from "../../entities/Card.entity"
import { connectDatabase } from "../../util/ConnectDatabase"
import ingestCards from "./commands/IngestCards"
import ingestDecks from "./commands/IngestDecks"
import ingestDeckList from "./commands/IngestDeckList"
import ingestSetList from "./commands/IngestSetList"
import ingestSets from "./commands/IngestSets"
import ingestMetaData from "./commands/IngestMetaData"

// warning when utilizing this function unless you have
// a large heap allocated you will likely run out of memory.

const databaseIngest = async () => {
    try{
        await connectDatabase()
        MTGLog.info(`Connected to database successfully & running all ingest commands`)
    }
    catch(err){
        MTGLog.error(`Database error: ${err}`)
    }

    await ingestCards()
    await ingestDecks()
    await ingestSets()
    await ingestDeckList()
    await ingestSetList()
    await ingestMetaData()
    
}

databaseIngest()

export default databaseIngest