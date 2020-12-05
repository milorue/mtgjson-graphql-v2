import { CardEntity } from "../../../entities/card/Card.entity";
import { ContextInterface } from "types/interfaces/Context.interface";
import CardGetInput from "./CardGetInput";
import { Connection } from "typeorm";
import { createConnection } from "net";

const CardGet = async({cardName, uuid}: CardGetInput, ctx: ContextInterface): Promise<CardEntity> => {
    const card = await CardEntity.find(
        {take: 10}
    )
    
    if(!card){
        throw new Error("This card doesn't exist or we don't have data on it in our latest build...")
    }

    console.log(card)
    throw new Error("Broke")
}

export default CardGet