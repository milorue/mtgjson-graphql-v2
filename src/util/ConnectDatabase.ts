require('dotenv').config()
import {Connection, createConnection} from 'typeorm'
import { DatabaseConfig } from '../types/DatabaseOptions'
import { CardEntity } from '../entities/Card.entity'
import { ForeignDataEntity } from '../entities/ForeignData.entity'
import { RulingsEntity } from '../entities/Rulings.entity'
import { LegalitiesEntity } from '../entities/Legalities.entity'
import { DeckEntity } from '../entities/Deck.entity'
import { DeckListEntity } from '../entities/DeckList.entity'
import { SetListEntity } from '../entities/SetList.entity'
import { SetEntity } from '../entities/Set.entity'
import { AtomicCardEntity } from '../entities/AtomicCard.entity'
import { MetaEntity } from '../entities/Meta.entity'
import { APITokenEntity } from '../entities/APIToken.entity'
import { CardPriceEntity } from '../entities/CardPrice.entity'

export const connectDatabase = async(): Promise<Connection> => {
    return createConnection({
        type: "postgres",
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DATABASE,
        synchronize: true,
        entities: [CardEntity, DeckEntity, DeckListEntity, SetListEntity, SetEntity, AtomicCardEntity,
        MetaEntity, APITokenEntity, CardPriceEntity]
    })
}