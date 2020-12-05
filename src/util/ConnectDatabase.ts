import {Connection, createConnection} from 'typeorm'
import { DatabaseConfig } from '../types/DatabaseOptions'
import { CardEntity } from '../entities/card/Card.entity'
import { ForeignDataEntity } from '../entities/card/ForeignData.entity'
import { RulingsEntity } from '../entities/rulings/Rulings.entity'
import { LeadershipEntity } from '../entities/card/LeadershipSkills.entity'
import { LegalitiesEntity } from '../entities/legalities/Legalities.entity'

export const connectDatabase = async(args: DatabaseConfig ,devMode: boolean): Promise<Connection> => {
    if(devMode){
        return createConnection({
            type: "sqlite",
            database: "/home/mrue/open-source/mtgjson-graphql-v2/src/database/AllPrintings.db",
            synchronize: true,
            entities: [CardEntity, ForeignDataEntity, RulingsEntity, LegalitiesEntity]
        })
    }
    return createConnection({
        type: "postgres",
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        database: process.env.DB_DATABASE,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
    })
}