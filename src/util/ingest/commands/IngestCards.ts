import { connectDatabase } from "../../ConnectDatabase"
import MTGLog from "../../Logger"
import { getAllPrintings, getSetList } from "../APIOperators"
import { CardEntity } from "../../../entities/Card.entity"
import { cardIngest } from "../Card.ingest"

const ingestCards = async() => {
    try{
        await connectDatabase()
        MTGLog.info(`Connected to database successfully`)
        MTGLog.info(`Running ingestCards command...`)
    }
    catch(err){
        MTGLog.error(`Database error: ${err}`)
    }

    try{
        const allPrintingData = await getAllPrintings()
        let cards: CardEntity[] = allPrintingData.data["10E"].cards[0]
        const setList = await getSetList()

        setList.data.map((set: any) => {
            cards = allPrintingData.data[set.code].cards
            cards.map((card: CardEntity) => {
                cardIngest(card)
            })
        })
    }
    catch(err){
        MTGLog.error(err)
    }
}

ingestCards()

export default ingestCards