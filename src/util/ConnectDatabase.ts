require('dotenv').config()
import {Connection, createConnection} from 'typeorm'
import { DatabaseConfig } from '../types/DatabaseOptions'
import { CardEntity } from '../entities/Card.entity'
import { ForeignDataEntity } from '../entities/ForeignData.entity'
import { RulingsEntity } from '../entities/Rulings.entity'
import { LegalitiesEntity } from '../entities/Legalities.entity'

export const connectDatabase = async(): Promise<Connection> => {
    return createConnection({
        type: "postgres",
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DATABASE,
        synchronize: true,
        entities: [CardEntity]
    })
}