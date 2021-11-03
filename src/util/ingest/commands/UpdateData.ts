import { connectDatabase } from "../../../util/ConnectDatabase";
import MTGLog from "../../../util/Logger";
import { QueryRunner, Connection, getConnection } from "typeorm";

const updateData = async() => {
    try{
        await connectDatabase();
        MTGLog.info(`Connected to database successfully`);
        MTGLog.info(`Dropping data from data fields`);
    }
    catch(err){
        MTGLog.error(`Database error: ${err}`)
        return;
    }

    try{
        const connection: Connection = getConnection();
        const queryRunner: QueryRunner = connection.createQueryRunner();
        queryRunner.connect()
        MTGLog.info(`Connected the query runner successfully`);
        const tables = ["atomic-cards", "cards", "deck-list", "decks", "meta", "set-list", "sets"];
        const promises = tables.map(async (val, i) => {
            await queryRunner.dropTable(val);
            MTGLog.info(`Dropped: ${val}`);
        })
        await Promise.all(promises)
        MTGLog.info(`Successfully reset data tables`);
        return process.exit(0)
    }
    catch(err){
        MTGLog.error(`Error whilst running query runner: ${err}`)
        return process.exit(0)
    }


}

updateData();

export default updateData