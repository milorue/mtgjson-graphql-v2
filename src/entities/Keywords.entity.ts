import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";
import { ObjectType, Field } from "type-graphql";

@Entity({name: "keywords"})
@ObjectType("Keywords")
export class Keywords extends BaseEntity {

    // this is for future proofing
    @Field(() => String, {nullable: true})
    @PrimaryGeneratedColumn()
    id: string

    @Field(() => [String], {nullable: true, description: "List of ability words found in rules text on cards"})
    @Column("text", {array: true, nullable: true})
    abilityWords: string[]

    @Field(() => [String], {nullable: true, description: "List of keyword abilities found in rules text on cards"})
    @Column("text", {array: true, nullable: true})
    keywordAbilities: string[]

    @Field(() => [String], {nullable: true, description: "List of keyword actions found in rules text on cards"})
    @Column("text", {array: true, nullable: true})
    keywordActions: string[]

}