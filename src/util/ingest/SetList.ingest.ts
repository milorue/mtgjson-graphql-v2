import { SetListEntity } from "../../entities/SetList.entity";
import MTGLog from "../../util/Logger";

export const setListIngest = async(setList: SetListEntity) => {
    MTGLog.info(`Began ingesting setlist with code: ${setList.code}`)

    try{
        const newSetList = SetListEntity.create({
            ...setList
        })
        await newSetList.save()
        MTGLog.info(`Ingested the setlist with code: ${setList.code}`)
    }
    catch(err){
        MTGLog.error(`Ingesting error: ${err}`)
    }
}