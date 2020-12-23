import { Authorized, Query, Arg, Ctx, Resolver } from "type-graphql";
import { DeckListEntity } from "../../entities/DeckList.entity";
import DeckMetaGetInput from "./get/DeckMetaGetInput";
import { ContextInterface } from "../../types/interfaces/Context.interface";
import DeckMetaGet from "./get/DeckMetaGet";
import ListOrderInput from "../../inputs/ListOrderInput";
import PaginationInput from "../../inputs/PaginationInput";
import DeckMetaGetList from "./get-list/DeckMetaGetList";

@Resolver()
class DeckListResolver{

    @Authorized()
    @Query(() => DeckListEntity)
    async getDeckMetadata(
        @Arg("input") input: DeckMetaGetInput,
        @Ctx() ctx: ContextInterface) : Promise<DeckListEntity> {
            return DeckMetaGet(input, ctx);
        }

    @Authorized()
    @Query(() => [DeckListEntity])
    async getDeckMetadataList(
        @Arg("input") input: ListOrderInput,
        @Arg("page") page: PaginationInput,
        @Ctx() ctx: ContextInterface) : Promise<DeckListEntity[]> {
            return DeckMetaGetList(page, input, ctx);
        }
}

export default DeckListResolver