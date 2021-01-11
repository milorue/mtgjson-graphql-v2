import { connectDatabase } from "../../../util/ConnectDatabase"
import MTGLog from "../../../util/Logger"
import { getMeta } from "../APIOperators"
import { metaIngest } from "../Meta.ingest"
import { MetaEntity } from "../../../entities/Meta.entity"

const ingestMetaData = async() => {
    try{
        await connectDatabase()
        MTGLog.info(`Connected to database successfully`)
        MTGLog.info(`Running metaData command...`)
    }
    catch(err){
        MTGLog.error(`Database error: ${err}`)
    }

    try{
        const metaData = await getMeta()
        let meta: MetaEntity = metaData.data
        await metaIngest(meta);
    }
    catch(err){
        MTGLog.error(err)
    }
}

ingestMetaData()

export default ingestMetaData