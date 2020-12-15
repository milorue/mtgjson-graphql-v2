import { getAllPrintings, getSetList } from "./APIOperators"
import { cardIngest } from "./Card.ingest"
import MTGLog from "../Logger"
import { CardEntity } from "../../entities/Card.entity"
import { connectDatabase } from "../../util/ConnectDatabase"



const databaseIngest = async () => {
    try{
        await connectDatabase()
        MTGLog.info(`Connected to database successfully`)
    }
    catch(err){
        MTGLog.error(`Database error: ${err}`)
    }

    try{
        const allPrintingData = await getAllPrintings()
        let cards = allPrintingData.data["10E"].cards[0]
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

databaseIngest()

export default databaseIngest