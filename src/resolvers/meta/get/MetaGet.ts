import { ContextInterface } from "../../../types/interfaces/Context.interface";
import { MetaEntity } from "../../../entities/Meta.entity";
import MTGLog from "../../../util/Logger";

const MetaGet = async(ctx: ContextInterface): Promise<MetaEntity> => {
    const latestMeta = await MetaEntity.find()

    if(!latestMeta){
        throw new Error(`The metadata resource is currently incomplete please try again later`)
    }
    else{
        const currDate = new Date().toUTCString()
        console.log(currDate)
        let mostRecent: MetaEntity = latestMeta[0]
        latestMeta.map((meta) => {
            if(meta.date > mostRecent.date){
                mostRecent = meta
            }
        })

        return(mostRecent)
    }
    
}

export default MetaGet