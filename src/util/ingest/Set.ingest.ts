import { SetEntity } from "../../entities/Set.entity";
import MTGLog from "../../util/Logger";

export const setIngest = async(set: SetEntity): Promise<void> => {
    MTGLog.info(`Began ingesting set: ${set.code} | ${set.name}`)

    try{
        const newSet = SetEntity.create({
            ...set
        })
        await newSet.save()
        MTGLog.info(`Ingested: ${set.code}`)
    }
    catch(err){
        MTGLog.error(`Ingesting Error: ${err}`)
    }
}