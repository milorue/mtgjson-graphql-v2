import { CardEntity } from "../../../entities/Card.entity";
import { ContextInterface } from "types/interfaces/Context.interface";
import CardGetInput from "./CardGetInput";

const CardGet = async({name, uuid}: CardGetInput, ctx: ContextInterface): Promise<CardEntity> => {

    if(!name){
        const card = await CardEntity.findOne(
            {
                where: {
                    uuid: uuid,
                }
            }
        )
        if(!card){
            throw new Error("This card doesn't exist or we don't have data on it in our latest build")
        }
        return card
    }
    else if(name){
        const card = await CardEntity.findOne(
            {
                where: {
                    name: name
                }
            }
        )
        if(!card){
            throw new Error("This card doesn't exist or we don't have data on it in our latest build")
        }
        return card
    }
    else{
        throw new Error("No card input was provided")
    }
    
}

export default CardGet