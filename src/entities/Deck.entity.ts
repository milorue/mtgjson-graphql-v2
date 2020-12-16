import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { CardEntity } from "./Card.entity";

@Entity({name: "decks"})
@ObjectType("Deck")
export class DeckEntity extends BaseEntity {

    @Field(() => String, {nullable: false})
    @PrimaryGeneratedColumn()
    id: string

    @Field(() => String, {nullable: true, description: "Set code for the deck"})
    @Column({nullable: true})
    code: string

    @Field(() => [CardEntity], {nullable: true, description: "The cards in the main-board. See the Card data model"})
    @Column("jsonb", {nullable: true})
    mainBoard: CardEntity[]

    @Field(() => String, {nullable: true, description: "Name of the deck"})
    @Column({nullable: true})
    name: string

    @Field(() => [CardEntity], {nullable: true, description: "The cards in the side-board. See the Card data model"})
    @Column("jsonb", {nullable: true})
    sideBoard: CardEntity[]

    @Field(() => String, {nullable: true, description: "Release date in ISO 8601 format for the set. Returns null if the set was not formally released as a product."})
    @Column({nullable: true})
    releaseDate: string

    @Field(() => String, {nullable: true, description: "The type of deck"})
    @Column({nullable: true})
    type: string

}