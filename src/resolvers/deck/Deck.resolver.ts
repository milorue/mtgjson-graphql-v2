import { Resolver, Authorized, Query, Ctx, Arg } from "type-graphql";
import { DeckEntity } from "../../entities/Deck.entity";
import DeckGetInput from "./get/DeckGetInput";
import { ContextInterface } from "types/interfaces/Context.interface";
import DeckGet from "./get/DeckGet";
import DeckGetListInput from "./get-list/DeckGetListInput";
import PaginationInput from "../../inputs/PaginationInput";
import DeckGetList from "./get-list/DeckGetList";

@Resolver()
class DeckResolver {

    @Authorized()
    @Query(() => DeckEntity)
    async getDeck(
        @Arg("input") input: DeckGetInput,
        @Ctx() ctx: ContextInterface): Promise<DeckEntity> {
            return DeckGet(input, ctx)
        }

    @Authorized()
    @Query(() => [DeckEntity])
    async getDecks(
        @Arg("order") input: DeckGetListInput,
        @Arg("page") page: PaginationInput,
        @Ctx() ctx: ContextInterface) : Promise<any[]> {
            return DeckGetList(page, input, ctx);
        }
}

export default DeckResolver