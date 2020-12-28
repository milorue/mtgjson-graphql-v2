import { connectDatabase } from "../../../util/ConnectDatabase"
import MTGLog from "../../../util/Logger"
import { getSetList } from "../APIOperators"
import { SetListEntity } from "../../../entities/SetList.entity"
import { setListIngest } from "../SetList.ingest"

const ingestSetList = async() => {
    try{
        await connectDatabase()
        MTGLog.info(`Connected to database successfully`)
        MTGLog.info(`Running ingestSetList command...`)
    }
    catch(err){
        MTGLog.error(`Database error: ${err}`)
    }

    try{
        const setListData = await getSetList()
        let setList: SetListEntity[] = setListData.data
        setList.map((setItem: SetListEntity) => {
            setListIngest(setItem)
        })
    }
    catch(err){
        MTGLog.error(err)
    }
}

ingestSetList()

export default ingestSetList