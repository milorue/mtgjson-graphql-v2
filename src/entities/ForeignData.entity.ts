import { ObjectType, Field } from "type-graphql";
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@ObjectType("ForeignData")
export class ForeignDataEntity{

    @Field(() => String, {nullable: true, description: "Name on the face of the card"})
    @Column({nullable: true})
    faceName: string

    @Field(() => String, {nullable: true, description: "Flavor text in foreign language"})
    @Column({nullable: true})
    flavorText: string

    @Field(() => String, {description: "Foreign language of card"})
    @Column({nullable: true})
    language: string

    @Field(() => String, {nullable: true, description: "Multiverse ID of the card"})
    @Column({nullable: true})
    multiverseId: number

    @Field(() => String, {nullable: true, description: "Name of the card in foreign language"})
    @Column({nullable: true})
    name: string

    @Field(() => String, {nullable: true, description: "Text ruling of the card in foreign language"})
    @Column({nullable: true})
    text: string

    @Field(() => String, {nullable: true, description: "Type of the card. Includes any supertypes and subtypes"})
    @Column({nullable: true})
    type: string
}