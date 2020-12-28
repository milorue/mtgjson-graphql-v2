import SetGetInput from "./SetGetInput";
import { ContextInterface } from "../../../types/interfaces/Context.interface";
import { SetEntity } from "../../../entities/Set.entity";

const SetGet = async({name, code}: SetGetInput, ctx: ContextInterface): Promise<SetEntity> => {

    if(name){
        const set = await SetEntity.findOne(
            {
                where: {
                    name: name
                }
            }
        )
        if(!set){
            throw new Error("This set doesn't exist or we don't have data on it in our latest build")
        }
        return set
    } else if(code){
        const set = await SetEntity.findOne(
            {
                where: {
                    code: code
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