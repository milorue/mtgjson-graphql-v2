import PaginationInput from "../../../inputs/PaginationInput";
import ListOrderInput from "../../../inputs/ListOrderInput";
import { ContextInterface } from "../../../types/interfaces/Context.interface";
import { SetListEntity } from "../../../entities/SetList.entity";
import MTGLog from "../../../util/Logger";

const SetMetaGetList = async({skip, take}: PaginationInput, {order}: ListOrderInput, ctx: ContextInterface): Promise<SetListEntity[]> => {
    
    try{
        const setMetaQuery = SetListEntity.createQueryBuilder("set-list")
        .orderBy("id", order)
        .skip(skip)
        .take(take)
        .getMany()

        const setMetas = await setMetaQuery

        if(setMetas.length > 0){
            return setMetas
        } else{
            throw new Error("There was an error in retrieving the list of set file meta data...")
        }
    } catch(err){
        // logs out whatever odd error we got
        MTGLog.error(err)
        throw new Error("Internal server error")
    }
    
}

export default SetMetaGetList