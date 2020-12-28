import { SetEntity } from "../../../entities/Set.entity";
import ListOrderInput from "../../../inputs/ListOrderInput";
import { ContextInterface } from "../../../types/interfaces/Context.interface";
import PaginationInput from "../../../inputs/PaginationInput";

const SetGetList = async({skip, take}: PaginationInput, {order}: ListOrderInput, ctx: ContextInterface): Promise<SetEntity[]> => {

    const setsQuery = SetEntity.createQueryBuilder("sets")
    .orderBy("id", order)
    .skip(skip)
    .take(take)
    .getMany()

    const sets = await setsQuery

    if(sets.length > 0){
        return sets
    }else{
        throw new Error("There was an error in retrieving the list of sets ")
    }
}

export default SetGetList