import { Resolver, Authorized, Query, Arg, Ctx } from "type-graphql";
import { CardEntity } from "../../entities/card/Card.entity";
import CardGetInput from "./get/CardGetInput";
import { ContextInterface } from "../../types/interfaces/Context.interface";
import CardGet from "./get/CardGet";

@Resolver()
class CardResolver {

    @Authorized()
    @Query(() => CardEntity)
    async getCard(
        @Arg("input") input: CardGetInput, 
        @Ctx() ctx: ContextInterface): Promise<CardEntity> {
            return CardGet(input, ctx)
        }
}

export default CardResolver