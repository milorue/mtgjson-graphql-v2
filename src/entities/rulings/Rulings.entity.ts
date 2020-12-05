import { ObjectType, Field } from "type-graphql";
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { CardEntity } from "../card/Card.entity";

@ObjectType("Rulings")
@Entity({name: "rulings"})
export class RulingsEntity extends BaseEntity{

    @Field({nullable: true, description: "ID of Rulings"})
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => Date, {nullable: true, description: "Release date in ISO 8601 format for the rule"})
    @Column()
    date: Date

    @Field({nullable: true, description: "Text ruling of the card"})
    @Column()
    text: string

    @Field({nullable: true, description: 'UUID of the card ruled upon'})
    @ManyToOne(() => CardEntity, card => card.uuid)
    uuid: string

}