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
    @Query(() => [SetEntity], {description: "Retrieves a given list of sets based on criteria"})
    async sets(
        @Arg("input") input: SetGetInput,
        @Arg("order") order: ListOrderInput,
        @Arg("page") page: PaginationInput,
        @Ctx() ctx: ContextInterface
    ): Promise<SetEntity[]> {
        return SetGet(input, page, order, ctx)
    }

    // @Authorized()
    // @Query(() => [SetEntity], {description: "Retrieves a random list of sets from the database"})
    // async randomSets(
    //     @Arg("order") input: ListOrderInput,
    //     @Arg("page") page: PaginationInput,
    //     @Ctx() ctx: ContextInterface
    // ): Promise<SetEntity[]> {
    //     return SetGetList(page, input, ctx)
    // }
}

export default SetResolver