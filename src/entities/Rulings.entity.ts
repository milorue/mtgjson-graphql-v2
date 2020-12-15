import { ObjectType, Field } from "type-graphql";
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { CardEntity } from "./Card.entity";

@ObjectType("Rulings")
export class RulingsEntity{

    @Field(() => String, {nullable: true, description: "Release date in ISO 8601 format for the rule"})
    @Column({nullable: true})
    date: string

    @Field({nullable: true, description: "Text ruling of the card"})
    @Column({nullable: true})
    text: string

}