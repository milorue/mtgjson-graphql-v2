import { connectDatabase } from "../../ConnectDatabase"
import MTGLog from "../../Logger"
import { getDeckList, getDeck } from "../APIOperators"
import { DeckListEntity } from "../../../entities/DeckList.entity"
import { DeckEntity } from "../../../entities/Deck.entity"
import axios from "axios"
import { deckIngest } from "../Deck.ingest"

const ingestDecks = async() => {
    try{
        await connectDatabase()
        MTGLog.info(`Connected to database successfully`)
        MTGLog.info(`Running ingestDecks command...`)
    }
    catch(err){
        MTGLog.error(`Database error: ${err}`)
    }

    try{
        const deckListData = await getDeckList()
        let deckList: DeckListEntity[] = deckListData.data
        let deckData
        let deck: DeckEntity
        for(let x = 0; x<deckList.length; x++){
            deckData = await axios.get("https://mtgjson.com/api/v5/decks/" + encodeURI(deckList[x].fileName) + ".json")
            deck = deckData.data.data
            deckIngest(deck)
        }
    }
    catch(err){
        MTGLog.error(err)
    }
}

ingestDecks()

export default ingestDecks