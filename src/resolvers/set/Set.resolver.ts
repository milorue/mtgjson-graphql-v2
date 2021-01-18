import { Resolver, Authorized, Query, Arg, Ctx } from "type-graphql";
import { SetEntity } from "../../entities/Set.entity";
import SetGetInput from "./get/SetGetInput";
import { ContextInterface } from "../../types/interfaces/Context.interface";
import SetGet from "./get/SetGet";
import ListOrderInput from "../../inputs/ListOrderInput";
import PaginationInput from "../../inputs/PaginationInput";
import SetGetList from "./get-list/SetGetList";

@Resolver()
class SetResolver {

    @Authorized()
    @Query(() => SetEntity)
    async set(
        @Arg("input") input: SetGetInput,
        @Ctx() ctx: ContextInterface
    ): Promise<SetEntity> {
        return SetGet(input, ctx)
    }

    @Authorized()
    @Query(() => [SetEntity])
    async sets(
        @Arg("order") input: ListOrderInput,
        @Arg("page") page: PaginationInput,
        @Ctx() ctx: ContextInterface
    ): Promise<SetEntity[]> {
        return SetGetList(page, input, ctx)
    }
}

export default SetResolver