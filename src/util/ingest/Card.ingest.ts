import { CardEntity } from "../../entities/Card.entity";
import MTGLog from "../Logger";

export const cardIngest = async(card: CardEntity) => {
    MTGLog.info(`Began ingesting card: ${card.name}`)

    try{
        const newCard = CardEntity.create({
            ...card
        })
        await newCard.save()
        MTGLog.info(`Ingested: ${card.name}`)
    }
    catch(err){
        MTGLog.error(`Ingesting Error: ${err}`)
    }
    
}