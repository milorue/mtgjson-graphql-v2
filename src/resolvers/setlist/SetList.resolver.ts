import { Resolver, Authorized, Query, Ctx, Arg } from "type-graphql";
import { SetListEntity } from "../../entities/SetList.entity";
import SetMetaGetInput from "./get/SetMetaGetInput";
import { ContextInterface } from "../../types/interfaces/Context.interface";
import SetMetaGet from "./get/SetMetaGet";
import ListOrderInput from "../../inputs/ListOrderInput";
import PaginationInput from "../../inputs/PaginationInput";
import SetMetaGetList from "./get-list/SetMetaGetList";

@Resolver()
class SetListResolver{

    @Authorized()
    @Query(() => SetListEntity)
    async setlist(
        @Arg("input") input: SetMetaGetInput,
        @Ctx() ctx: ContextInterface
    ): Promise<SetListEntity> {
        return SetMetaGet(input, ctx);
    }

    @Authorized()
    @Query(() => [SetListEntity])
    async setlists(
        @Arg("order") input: ListOrderInput,
        @Arg("page") page: PaginationInput,
        @Ctx() ctx: ContextInterface
    ): Promise<SetListEntity[]> {
        return SetMetaGetList(page, input, ctx)
    }
}