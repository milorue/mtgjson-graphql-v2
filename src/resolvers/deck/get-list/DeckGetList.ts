import { DeckEntity } from "../../../entities/Deck.entity";
import DeckGetListInput from "./DeckGetListInput";
import PaginationInput from "../../../inputs/PaginationInput";
import MTGLog from "../../../util/Logger";
import { ContextInterface } from "types/interfaces/Context.interface";
import { ListOrder } from "../../../types/enums/Order.enum";
import ListOrderInput from "../../../inputs/ListOrderInput";

const DeckGetList = async({skip, take}: PaginationInput, {order}: ListOrderInput, ctx: ContextInterface): Promise<DeckEntity[]> => {
    let orderBy: string | any;
    switch(order){
        case ListOrder.ASC:
            orderBy = "ASC"
            break
        case ListOrder.DESC:
            orderBy = "DESC"
            break
        default:
            throw new Error("You may only use ASC or DESC for ordering of the list")
    }
    const decksQuery = DeckEntity.createQueryBuilder("decks")
    .orderBy("id", orderBy)
    .skip(skip)
    .take(take)
    .getMany()

    const decks = await decksQuery
    if(decks.length > 0){
        return decks
    } else{
        throw new Error("There was an error retrieving the list of decks...")
    }
    
}

export default DeckGetList