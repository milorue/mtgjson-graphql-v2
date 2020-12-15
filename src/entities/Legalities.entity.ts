import { ObjectType, Field } from "type-graphql";
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import {LegalitiesStatus} from '../types/LegalitiesStatus.type'
import { LegalitiesFormat } from "../types/enums/LegalitiesFormat.enum";
import { CardEntity } from "./Card.entity";

@ObjectType("Legalities")
export class LegalitiesEntity{

    @Field(() => LegalitiesFormat, {nullable: true})
    @Column({nullable: true})
    format: LegalitiesFormat

    @Field({nullable: true})
    @Column({nullable: true})
    status: LegalitiesStatus

    @Field(() => CardEntity, {nullable: true})
    @Column({nullable: true})
    uuid: string
}