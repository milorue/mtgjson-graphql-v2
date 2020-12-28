import { Resolver, Authorized, Query, Arg, Ctx } from "type-graphql";
import { SetEntity } from "../../entities/Set.entity";
import SetGetInput from "./get/SetGetInput";
import { ContextInterface } from "../../types/interfaces/Context.interface";
import SetGet from "./get/SetGet";

@Resolver()
class SetResolver {

    @Authorized()
    @Query(() => SetEntity)
    async getSet(
        @Arg("input") input: SetGetInput,
        @Ctx() ctx: ContextInterface
    ): Promise<SetEntity> {
        return SetGet(input, ctx)
    }
}

export default SetResolver