import { ContextInterface } from "../../../types/interfaces/Context.interface";
import { DeckListEntity } from "../../../entities/DeckList.entity";
import DeckMetaGetInput from "./DeckMetaGetInput";

const DeckMetaGet = async({code, name}: DeckMetaGetInput, ctx: ContextInterface): Promise<DeckListEntity> => {

    if(code){
        const deckListQuery = await DeckListEntity.findOne({
            where: {
                "code": code
            }
        })

        if(deckListQuery){
            return deckListQuery
        } else{
            throw new Error("Deck with the provided code doesn't exist in our most recent build or in the universe")
        }
    }
    else if(name){
        const deckListQuery = await DeckListEntity.findOne({
            where: {
                "name": name
            }
        })
        if(deckListQuery){
            return deckListQuery
        } else{
            throw new Error("Deck with the provided name doesn't exist in our most recent build or in the universe")
        }
    }
    else{
        throw new Error("Your input was invalid or malformed...")
    }

}

export default DeckMetaGet