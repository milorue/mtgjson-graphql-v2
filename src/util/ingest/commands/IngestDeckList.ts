import { connectDatabase } from "../../ConnectDatabase"
import MTGLog from "../../Logger"
import { getDeckList } from "../APIOperators"
import { DeckListEntity } from "../../../entities/DeckList.entity"
import { deckListIngest } from "../DeckList.ingest"

const ingestDeckList = async() => {
    try{
        await connectDatabase()
        MTGLog.info(`Connected to database successfully`)
        MTGLog.info(`Running ingestDeckList command...`)
    }
    catch(err){
        MTGLog.error(`Database error: ${err}`)
    }

    try{
        const deckListData = await getDeckList()
        let deckList: DeckListEntity[] = deckListData.data
        deckList.map((deckItem: DeckListEntity) => {
            deckListIngest(deckItem)
        })
    }
    catch(err){
        MTGLog.error(err)
    }
}

ingestDeckList()

export default ingestDeckList