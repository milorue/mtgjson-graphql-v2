import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { CardEntity } from "./Card.entity";
import { CardTokenEntity } from "./CardToken.entity";
import { TranslationsEntity } from "./Translations.entity";

@Entity({name: "sets"})
@ObjectType("Set")
export class SetEntity extends BaseEntity {

    @Field(() => String, {nullable: false})
    @PrimaryGeneratedColumn()
    id: string

    @Field(() => Number, {nullable: true, description: "Number of cards in the set. Will default to totalSetSize if not available. Note that Wizards sometimes prints extra cards beyond the set size into promos or supplemental products."})
    @Column({nullable: true})
    baseSetSize: number

    @Field(() => String, {nullable: true, description: "Block name the set was in"})
    @Column({nullable: true})
    block: string

    // boosters goes here but for now i'm leaving it out for 
    // the sake of my sanity as it's a clustertruck that isn't currently
    // needed in the beta and causes more issues than currently worth

    @Field(() => [CardEntity], {nullable: true, description: "List of cards in this set. See the Card data model"})
    @Column("jsonb", {nullable: true})
    cards: CardEntity[]

    @Field(() => String, {nullable: true, description: "Set code for the set"})
    @Column({nullable: true})
    code: string

    @Field(() => String, {nullable: true, description: "Alternate set code Wizards uses for a select few duel deck sets."})
    @Column({nullable: true})
    codeV3: string

    @Field(() => Boolean, {nullable: true, description: "If this set is available only outside the United States"})
    @Column({nullable: true})
    isForeignOnly: boolean

    @Field({nullable: true, description: "If this set is only available in foil"})
    @Column({nullable: true})
    isFoilOnly: boolean

    @Field({nullable: true, description: "If this set is only available in non-foil"})
    @Column({nullable: true})
    isNonFoilOnly: boolean

    @Field({nullable: true, description: "If this set is only available in Magic: The Gathering Online"})
    @Column({nullable: true})
    isOnlineOnly: boolean

    @Field({nullable: true, description: "If this set is only available in paper"})
    @Column({nullable: true})
    isPaperOnly: boolean

    @Field({nullable: true, description: "If this set is still in preview (spoiled). Preview sets do not have complete data."})
    @Column({nullable: true})
    isPartialPreview: boolean

    @Field(() => String, {nullable: true, description: "The matching keyrune code for Keyrune image icons"})
    @Column({nullable: true})
    keyruneCode: string

    @Field(() => String, {nullable: true, description: "The Magic Card Market set name"})
    @Column({nullable: true})
    mcmName: string

    @Field(() => Number, {nullable: true, description: "The Magic Card Market set ID"})
    @Column({nullable: true})
    mcmId: number

    @Field(() => String, {nullable: true, description: "Set code for the set as it appears on Magic: The Gathering Online."})
    @Column({nullable: true})
    mtgoCode: string

    @Field(() => String, {nullable: true, description: "Name of the set."})
    @Column()
    name: string

    @Field(() => String, {nullable: true, description: "The parent set code for set variations like promotions, guild kits, etc"})
    @Column({nullable: true})
    parentCode: string

    @Field(() => String, {nullable: true, description: "Release date in ISO 8601 format for the set"})
    @Column({nullable: true})
    releaseDate: string

    @Field(() => Number, {nullable: true, description: "Group ID of the set on TCGPlayer"})
    @Column({nullable: true})
    tcgplayerGroupId: number

    @Field(() => [CardTokenEntity], {nullable: true, description: "Tokens available to the set. See the Card (Token) data model"})
    @Column("jsonb", {nullable: true})
    tokens: CardTokenEntity[]

    @Field({nullable: true, description: "Total number of cards in the set, including promos and related supplemental products"})
    @Column({nullable: true})
    totalSetSize: number

    @Field(() => TranslationsEntity, {nullable: true, description: "Translated set name by language. See the Translation data model"})
    @Column(() => TranslationsEntity)
    translations: TranslationsEntity

    @Field(() => String, {nullable: true, description: "Expansion type of the set"})
    @Column({nullable: true})
    type: string

}