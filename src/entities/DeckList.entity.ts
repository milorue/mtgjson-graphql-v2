import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field } from "type-graphql";

@Entity({name: "deck-list"})
@ObjectType("DeckList")
export class DeckListEntity extends BaseEntity {

    @Field(() => String, {nullable: false})
    @PrimaryGeneratedColumn()
    id: string

    @Field(() => String, {nullable: false, description: "Set code for the deck"})
    @Column()
    code: string

    @Field(() => String, {nullable: true, description: "File name for the deck. Combines the name and code fields to avoid namespace collisions."})
    @Column()
    fileName: string

    @Field(() => String, {nullable: true, description: "Name of the deck"})
    @Column()
    name: string

    @Field(() => String, {nullable: true, description: "Release date in ISO 8601 format for the set. Returns null if the set was not formally released as a product."})
    @Column()
    releaseDate: string
}