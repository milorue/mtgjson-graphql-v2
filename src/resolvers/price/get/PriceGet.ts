import PriceGetInput from "./PriceGetInput";
import PaginationInput from "../../../inputs/PaginationInput";
import ListOrderInput from "../../../inputs/ListOrderInput";
import { ContextInterface } from "../../../types/interfaces/Context.interface";
import { CardPriceEntity } from "../../../entities/CardPrice.entity";
import { Like } from "typeorm";

const PriceGet = async(priceInput: PriceGetInput, {take, skip}: PaginationInput, {order}: ListOrderInput, ctx: ContextInterface): Promise<CardPriceEntity[]> => {
    if(priceInput){
        const prices = await CardPriceEntity.find({
            where: {
                uuid: priceInput.uuid ? priceInput.uuid : Like("%"),
                provider: priceInput.provider ? priceInput.provider : Like("%"),
                format: priceInput.format ? priceInput.format : Like("%"),
                cardType: priceInput.cardType ? priceInput.cardType : Like("%"),
                date: priceInput.date ? priceInput.date : Like("%"),
                listType: priceInput.listType ? priceInput.listType : Like("%")
            },
            take: take,
            skip: skip,
            order: {
                date: order
            }
        })
        if(!prices){
            throw new Error("Price data for inputs doesn't exist or hasn't been added to most recent build yet")
        }
        return prices
    }else {
        throw new Error("No price data input was provided")
    }
    
}

export default PriceGet