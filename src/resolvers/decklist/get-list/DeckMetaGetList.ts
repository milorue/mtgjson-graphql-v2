import ListOrderInput from "../../../inputs/ListOrderInput";
import { ContextInterface } from "../../../types/interfaces/Context.interface";
import { DeckListEntity } from "../../../entities/DeckList.entity";
import PaginationInput from "../../../inputs/PaginationInput";

const DeckMetaGetList = async({skip, take}: PaginationInput, {order}: ListOrderInput, ctx: ContextInterface): Promise<DeckListEntity[]> => {
    
    const deckMetaQuery = DeckListEntity.createQueryBuilder("deck-list")
    .orderBy("id", order)
    .skip(skip)
    .take(take)
    .getMany()

    const deckMetas = await deckMetaQuery
    if(deckMetas.length > 0){
        return deckMetas
    } else{
        throw new Error("There was an error in retrieving the list of deck file meta data...")
    }
}

export default DeckMetaGetList