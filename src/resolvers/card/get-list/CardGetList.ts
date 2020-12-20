import PaginationInput from "../../../inputs/PaginationInput";
import CardGetListInput from "./CardGetListInput";
import { CardEntity } from "../../../entities/Card.entity";
import { ContextInterface } from "../../../types/interfaces/Context.interface";
import { ListOrder } from "../../../types/enums/Order.enum";

const CardGetList = async({skip, take}: PaginationInput, {order}: CardGetListInput, ctx: ContextInterface): Promise<CardEntity[]> => {
    let orderBy: string | any;
    switch(order){
        case ListOrder.ASC:
            orderBy = "ASC"
            break
        case ListOrder.DESC:
            orderBy = "DESC"
            break
        default:
            throw new Error("You many only use ASC or DESC for odering of the cards list")
    }
    // TODO make this above switch statement a decorator to place in front of ordered list resolvers

    const cardQuery = CardEntity.createQueryBuilder("cards")
    .orderBy("id", orderBy)
    .skip(skip)
    .take(take)
    .getMany()

    const cards = await cardQuery;
    return cards
}

export default CardGetList