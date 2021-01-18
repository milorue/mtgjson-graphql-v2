import { Resolver, Query, Ctx, Authorized } from "type-graphql";
import { MetaEntity } from "../../entities/Meta.entity";
import { ContextInterface } from "../../types/interfaces/Context.interface";
import MetaGet from "./get/MetaGet";

@Resolver()
class MetaResolver {

    @Authorized()
    @Query(() => MetaEntity)
    async metadata(
        @Ctx() ctx: ContextInterface
    ): Promise<MetaEntity> {
        return MetaGet(ctx)
    }
}