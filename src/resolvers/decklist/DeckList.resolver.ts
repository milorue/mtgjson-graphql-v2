import { Authorized, Query, Arg, Ctx, Resolver } from "type-graphql";
import { DeckListEntity } from "../../entities/DeckList.entity";
import DeckMetaGetInput from "./get/DeckMetaGetInput";
import { ContextInterface } from "../../types/interfaces/Context.interface";
import DeckMetaGet from "./get/DeckMetaGet";
import ListOrderInput from "../../inputs/ListOrderInput";
import PaginationInput from "../../inputs/PaginationInput";
import DeckMetaGetList from "./get-list/DeckMetaGetList";

// @Resolver()
// class DeckListResolver{

//     @Authorized()
//     @Query(() => [DeckListEntity], {description: "Retrieves deck lists based on criteria provided"})
//     async deckmeta(
//         @Arg("input") input: DeckMetaGetInput,
//         @Ctx() ctx: ContextInterface) : Promise<DeckListEntity[]> {
//             return DeckMetaGet(input, ctx);
//         }

//     @Authorized()
//     @Query(() => [DeckListEntity], {description: "Retrieves a random list of deck lists from the database"})
//     async random_deckmeta(
//         @Arg("order") input: ListOrderInput,
//         @Arg("page") page: PaginationInput,
//         @Ctx() ctx: ContextInterface) : Promise<DeckListEntity[]> {
//             return DeckMetaGetList(page, input, ctx);
//         }
// }

// export default DeckListResolver