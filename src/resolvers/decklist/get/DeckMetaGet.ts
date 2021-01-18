import { ContextInterface } from "../../../types/interfaces/Context.interface";
import { DeckListEntity } from "../../../entities/DeckList.entity";
import DeckMetaGetInput from "./DeckMetaGetInput";
import { Like } from "typeorm";

const DeckMetaGet = async({code, name, fileName, releaseDate}: DeckMetaGetInput, ctx: ContextInterface): Promise<DeckListEntity[]> => {

    if(code){
        const deckListQuery = await DeckListEntity.find({
            where: {
                code: code,
                
            }
        })

        if(deckListQuery){
            return deckListQuery
        } else{
            throw new Error("Deck with the provided code doesn't exist in our most recent build or in the universe")
        }
    }
    else if(name || fileName || releaseDate){
        console.log(releaseDate)
        const deckListQuery = await DeckListEntity.find({
            where: {
                name: name? name: Like("%"),
                fileName: fileName? fileName: Like("%"),
                releaseDate: releaseDate? releaseDate: Like("%")
            }
        })
        if(deckListQuery){
            return deckListQuery
        } else{
            throw new Error("Deck with the provided value doesn't exist in our most recent build or in the universe")
        }
    }
    else{
        throw new Error("Input was invalid or malformed...")
    }

}

export default DeckMetaGet