import { MetaEntity } from "../../entities/Meta.entity";
import MTGLog from "../../util/Logger";

export const metaIngest = async(meta: MetaEntity): Promise<void> => {
    MTGLog.info(`Began ingesting metadata for date: ${meta.date}`)

    try{
        const newMeta = MetaEntity.create({
            ...meta
        })
        await newMeta.save()
        MTGLog.info(`Ingested metadata: ${meta.version}`)
    }
    catch(err){
        MTGLog.error(`Ingesting Error: ${err}`)
    }
}