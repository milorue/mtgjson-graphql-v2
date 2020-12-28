import DeckGetInput from "./DeckGetInput";
import { DeckEntity } from "../../../entities/Deck.entity";
import { ContextInterface } from "types/interfaces/Context.interface";

const DeckGet = async({name, code}: DeckGetInput, ctx: ContextInterface): Promise<DeckEntity> => {
    if(name){
        const deck = await DeckEntity.findOne(
            {
                where: {
                    name: name
                }
            }
        )
        if(!deck){
            throw new Error("This deck doesn't exist or we don't have data on it in our latest build")
        }
        return deck
    }
    else if(code){
        const deck = await DeckEntity.findOne(
            {
                where: {
                    code: code
                }
            }
        )
        if(!deck){
            throw new Error("This deck doesn't exist or we don't have data on it in our latest build")
        }
        return deck
    }
    else{
        throw new Error("No deck input was provided")
    }
}

export default DeckGet