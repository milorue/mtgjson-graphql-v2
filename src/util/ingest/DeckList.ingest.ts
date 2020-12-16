import { DeckListEntity } from "../../entities/DeckList.entity";
import MTGLog from "../../util/Logger";

export const deckListIngest = async(deck: DeckListEntity) => {
    MTGLog.info(`Began ingesting decklist with code: ${deck.code}`)

    try{
        const newDeckList = DeckListEntity.create({
            ...deck
        })
        await newDeckList.save()
        MTGLog.info(`Ingested a decklist: ${newDeckList.code}`)
    }
    catch(err){
        MTGLog.error(`Ingesting Error: ${err}`)
    }
}