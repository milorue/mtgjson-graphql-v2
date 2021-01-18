import SetGetInput from "./SetGetInput";
import { ContextInterface } from "../../../types/interfaces/Context.interface";
import { SetEntity } from "../../../entities/Set.entity";
import { Like } from "typeorm";
import PaginationInput from "inputs/PaginationInput";
import ListOrderInput from "inputs/ListOrderInput";

const SetGet = async({name, code, block, keyruneCode, mcmName, mcmId, mtgoCode, parentCode, releaseDate, type}: SetGetInput, {skip, take}: PaginationInput, {order}: ListOrderInput, ctx: ContextInterface): Promise<SetEntity[]> => {

    if(name || code || block || keyruneCode || mcmName || mtgoCode || parentCode || releaseDate || type){
        const set = await SetEntity.find(
            {
                where: {
                    name: name? name : Like("%"),
                    code: code? code: Like("%"),
                    // block: block? block: Like("%"),
                    keyruneCode: keyruneCode? keyruneCode: Like("%"),
                    // mcmName: mcmName? mcmName: Like("%"),
                    // mcmId: mcmId? mcmId: Like("%"),
                    // mtgoCode: mtgoCode? mtgoCode: Like("%"),
                    // parentCode: parentCode? parentCode: Like("%"),
                    releaseDate: releaseDate? releaseDate: Like("%"),
                    type: type? type: Like("%")
                },
                take: take,
                skip: skip,
                order: {
                    name: order
                }
            }
        )
        if(!set){
            throw new Error("This set doesn't exist or we don't have data on it in our latest build")
        }
        return set
    } else{
        throw new Error("No set input was provided")
    }
}

export default SetGet