import { Resolver, Authorized, Query, Arg, Ctx } from "type-graphql";
import { CardEntity } from "../../entities/Card.entity";
import CardGetInput from "./get/CardGetInput";
import { ContextInterface } from "../../types/interfaces/Context.interface";
import CardGet from "./get/CardGet";
import CardGetListInput from "./get-list/CardGetListInput";
import PaginationInput from "../../inputs/PaginationInput";
import CardGetList from "./get-list/CardGetList";

@Resolver()
class CardResolver {

    @Authorized()
    @Query(() => CardEntity)
    async getCard(
        @Arg("input") input: CardGetInput, 
        @Ctx() ctx: ContextInterface): Promise<CardEntity> {
            return CardGet(input, ctx)
        }

    @Authorized()
    @Query(() => [CardEntity])
    async getCards(
        @Arg("order") input: CardGetListInput,
        @Arg("page") page: PaginationInput,
        @Ctx() ctx: ContextInterface): Promise<CardEntity[]> {
            return CardGetList(page, input, ctx)
        }
}

export default CardResolver