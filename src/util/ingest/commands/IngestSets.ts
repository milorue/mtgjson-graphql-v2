import { connectDatabase } from "../../../util/ConnectDatabase"
import MTGLog from "../../../util/Logger"
import { getSetList, getSet } from "../APIOperators"
import { SetListEntity } from "../../../entities/SetList.entity"
import { SetEntity } from "../../../entities/Set.entity"
import { setIngest } from "../Set.ingest"

const ingestSets = async() => {
    try{
        await connectDatabase()
        MTGLog.info(`Connected to database successfully`)
        MTGLog.info(`Running ingestSets command...`)
    }
    catch(err){
        MTGLog.error(`Database error: ${err}`)
    }

    try{
        const setListData = await getSetList()
        let setList: SetListEntity[] = setListData.data
        let setData;
        let set: SetEntity;
        for(let x = 0; x<setList.length; x++){
            setData = await getSet(setList[x].code.toString())
            set = setData.data
            setIngest(set)
        }
    }
    catch(err){
        MTGLog.error(err)
    }
}

ingestSets()

export default ingestSets