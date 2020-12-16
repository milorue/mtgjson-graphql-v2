import { DeckEntity } from "../../entities/Deck.entity";
import MTGLog from "../Logger";

export const deckIngest = async(deck: DeckEntity) => {
    MTGLog.info(`Began ingesting deck: ${deck.code} | ${deck.name}`)

    try{
        const newDeck = DeckEntity.create({
            ...deck
        })
        await newDeck.save()
        MTGLog.info(`Ingested deck: ${newDeck.code} | ${newDeck.name}`)
    }
    catch(err){
        MTGLog.error(`Ingesting Error: ${err}`)
    }
}