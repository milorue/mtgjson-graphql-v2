import SetMetaGetInput from "./SetMetaGetInput"
import { SetListEntity } from "../../../entities/SetList.entity"
import { ContextInterface } from "../../../types/interfaces/Context.interface"

const SetMetaGet = async({code, name}: SetMetaGetInput, ctx: ContextInterface): Promise<SetListEntity> => {

    if(code){
        const setListQuery = await SetListEntity.findOne({
            where: {
                "code": code
            }
        })

        if(setListQuery){
            return setListQuery
        } else{
            throw new Error("Set with the provided code doesn't exist in our most recent build or simply in the universe")
        }

    }
    else if(name){
        const setListQuery = await SetListEntity.findOne({
            where: {
                "name": name
            }
        })
        if(setListQuery){
            return setListQuery
        } else{
            throw new Error("Set with the provided name doesn't exist in our most recent build or simply in the universe")
        }
    }
    else{
        throw new Error("Input was invalid or malformed...")
    }

}

export default SetMetaGet