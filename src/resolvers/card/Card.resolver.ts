import { Resolver, Authorized, Query, Arg, Ctx } from "type-graphql";
import { CardEntity } from "../../entities/Card.entity";
import CardGetInput from "./get/CardGetInput";
import { ContextInterface } from "../../types/interfaces/Context.interface";
import CardGet from "./get/CardGet";
import CardGetListInput from "./get-list/CardGetListInput";
import PaginationInput from "../../inputs/PaginationInput";
import CardGetList from "./get-list/CardGetList";
import ListOrderInput from "../../inputs/ListOrderInput";

@Resolver()
class CardResolver {

    @Authorized()
    @Query(() => [CardEntity], {description: "Retrieve all cards with a given name or uuid"})
    async card(
        @Arg("input") input: CardGetInput, 
        @Ctx() ctx: ContextInterface): Promise<CardEntity[]> {
            return CardGet(input, ctx)
        }

    @Authorized()
    @Query(() => [CardEntity], {description: "Retrieve a list of cards ordered by id or a given field to order by"})
    async cards(
        @Arg("order") input: ListOrderInput,
        @Arg("page") page: PaginationInput,
        @Ctx() ctx: ContextInterface): Promise<CardEntity[]> {
            return CardGetList(page, input, ctx)
        }
}

export default CardResolver