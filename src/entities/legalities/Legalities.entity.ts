import { ObjectType, Field } from "type-graphql";
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import {LegalitiesStatus} from '../../types/LegalitiesStatus.type'
import { LegalitiesFormat } from "../../types/enums/LegalitiesFormat.enum";
import { CardEntity } from "../../entities/card/Card.entity";

@ObjectType("Legalities")
@Entity({name: "legalities"})
export class LegalitiesEntity extends BaseEntity{

    @Field({nullable: true})
    @PrimaryGeneratedColumn()
    id: number

    @Field(() => LegalitiesFormat, {nullable: true})
    @Column({nullable: true})
    format: LegalitiesFormat

    @Field({nullable: true})
    @Column({nullable: true})
    status: LegalitiesStatus

    @Field(() => CardEntity)
    @ManyToOne(() => CardEntity, card => card.uuid)
    uuid: CardEntity
}