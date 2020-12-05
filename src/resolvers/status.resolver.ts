import { Resolver, Query, Authorized, Ctx } from "type-graphql";
import { ContextInterface } from "types/interfaces/Context.interface";


@Resolver()
class StatusResolver {
    @Authorized()
    @Query(() => Boolean)
    async status(@Ctx() ctx: ContextInterface): Promise<boolean>{
        return true;
    }
}

export default StatusResolver