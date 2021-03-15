import { Resolver, Authorized, Query, Arg, Ctx } from "type-graphql";
import { CardPriceEntity } from "../../entities/CardPrice.entity";
import PriceGetInput from "./get/PriceGetInput";
import PaginationInput from "../../inputs/PaginationInput";
import ListOrderInput from "../../inputs/ListOrderInput";
import { ContextInterface } from "../../types/interfaces/Context.interface";
import PriceGet from "./get/PriceGet";

@Resolver()
class PriceResolver {

    @Authorized()
    @Query(() => [CardPriceEntity], {description: "Retrieves all price history within given criterias"})
    async prices(
        @Arg("input") input: PriceGetInput,
        @Arg("page") page: PaginationInput,
        @Arg("order") order: ListOrderInput,
        @Ctx() ctx: ContextInterface
    ): Promise<CardPriceEntity[]> {
        return PriceGet(input, page, order, ctx)
    }
}

export default PriceResolver