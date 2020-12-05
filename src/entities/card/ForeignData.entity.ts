import { ObjectType, Field } from "type-graphql";
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name: "foreign_data"})
@ObjectType("ForeignData")
export class ForeignDataEntity extends BaseEntity{

    @Field(() => String)
    @PrimaryGeneratedColumn()
    id: string

    @Field(() => String, {nullable: true, description: "Flavor text in foreign language"})
    @Column()
    flavorText: string

    @Field(() => String, {description: "Foreign language of card"})
    @Column()
    language: string

    @Field(() => String, {nullable: true, description: "Multiverse ID of the card"})
    @Column({nullable: true})
    multiverseId: number

    @Field(() => String, {description: "Name of the card in foreign language"})
    @Column()
    name: string

    @Field(() => String, {nullable: true, description: "Text ruling of the card in foreign language"})
    @Column()
    text: string

    @Field(() => String, {nullable: true, description: "Type of the card. Includes any supertypes and subtypes"})
    @Column()
    type: string

    @Field(() => String, {description: "UUID of card"})
    @Column()
    uuid: string    
}