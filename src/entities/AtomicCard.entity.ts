import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { ForeignDataEntity } from "./ForeignData.entity";
import { LeadershipEntity } from "./LeadershipSkills.entity";
import { LegalitiesEntity } from "./Legalities.entity";
import { PurchaseUrlsEntity } from "./PurchaseUrls.entity";
import { RulingsEntity } from "./Rulings.entity";

@Entity({name: "atomic-cards"})
@ObjectType("AtomicCard")
export class AtomicCardEntity extends BaseEntity {

    @Field(() => String, {nullable: false})
    @PrimaryGeneratedColumn()
    id: string

    @Field(() => String, {nullable: true, description: "Name of the artist that illustrated the card art"})
    @Column({nullable: true})
    artist: string

    @Field(() => [String], {nullable: true, description: "List of the colors found in manaCost, colorIndicator, and text"})
    @Column("text", {array: true, nullable: true})
    colorIdentity: string[]

    @Field(() => [String], {nullable: true, description: "List of all the colors in the color indicator (The symbol prefixed to a card's types)"})
    @Column("text", {array: true, nullable: true})
    colorIndicator: string[]

    @Field(() => [String], {nullable: true, description: "List of all colors in manaCost, colorIndicator. Some cards may not have a value, such as cards with 'Devoid' in its text"})
    @Column("text",{array: true, nullable: true})
    colors: string[]

    @Field(() => Number, {nullable: true, description: "The converted mana cost of the card"})
    @Column({nullable: true})
    convertedManaCost: number

    @Field(() => Number, {nullable: true, description: "Card rank on EDHRec"})
    @Column({nullable: true})
    edhrecRank: number

    @Field(() => Number, {nullable: true, description: "The converted mana cost of the face of either half or part of the card"})
    @Column({nullable: true})
    faceConvertedManaCost: number

    @Field(() => String, {nullable: true, description: "Name on the face of the card"})
    @Column({nullable: true})
    faceName: string

    @Field(() => [ForeignDataEntity], {nullable: true})
    @Column("jsonb", {nullable: true})
    foreignData: ForeignDataEntity[]

    @Field({nullable: true, description: "Starting maximum hand size total modifier. A plus or minus character proceeds an integer"})
    @Column({nullable: true})
    hand: string

    @Field({nullable: true, description: "If the card allows a value other than 4 copies in a deck"})
    @Column({nullable: true})
    hasAlternativeDeckLimit: boolean

    @Field({nullable: true, description: "If the card is on the Magic: The Gathering Reserved List"})
    @Column({nullable: true})
    isReserved: boolean

    @Field(() => String, {nullable: true, description: "Type of card layout"})
    @Column()
    layout: string

    @Field(() => LeadershipEntity, {nullable: true, description: "See the Leadership Skills data model"})
    @Column(() => LeadershipEntity)
    leadershipSkills: LeadershipEntity

    @Field(() => LegalitiesEntity, {nullable: true, description: "See the Legalities data model"})
    @Column("jsonb", {nullable: true})
    legalities: LegalitiesEntity[]

    @Field(() => String, {nullable: true, description: "Starting life total modifier. A plus or minus character preceeds an integer. Used only on Vanguard cards"})
    @Column({nullable: true})
    life: string

    @Field(() => String, {nullable: true, description: "Planeswalker loyalty value"})
    @Column({nullable: true})
    loyalty: string

    @Field(() => String, {nullable: true, description: "Mana cost of the card"})
    @Column({nullable: true})
    manaCost: string

    @Field(() => String, {nullable: true, description: "Names of each face on the card. Card with multiple faces, like 'Split' and 'Meld' cards are given as delimiter. Example: Face 1 Name // Face 2 Name"})
    @Column()
    name: string

    @Field(() => String, {nullable: true, description: "Power of the card"})
    @Column({nullable: true})
    power: string

    @Field(() => [String], {nullable: true, description: "List of sets the card was printed in, in uppercase"})
    @Column("text",{nullable: true, array: true})
    printings: string[]

    @Field(() => PurchaseUrlsEntity, {nullable: true, description: "See the Purchase Urls data model"})
    @Column(() => PurchaseUrlsEntity)
    purchaseUrls: PurchaseUrlsEntity

    @Field(() => [RulingsEntity], {nullable: true, description: "See the Rulings data model"})
    @Column("jsonb", {nullable: true})
    rulings: RulingsEntity[]

    @Field(() => String, {nullable: true, description: "Identifier of the card side. Used on cards with multiple faces"})
    @Column({nullable: true})
    side: string

    @Field(() => [String], {nullable: true, description: "List of card subtypes found after em-dash"})
    @Column("text",{array: true, nullable: true})
    subTypes: string[]

    @Field(() => [String], {nullable: true, description: "List of card supertypes found before em-dash"})
    @Column("text",{array: true, nullable: true})
    superTypes: string[]

    @Field(() => String, {nullable: true, description: "Rules text of the card"})
    @Column({nullable: true})
    text: string

    @Field(() => String, {nullable: true, description: "Toughness of the card"})
    @Column({nullable: true})
    toughness: string

    @Field(() => String, {nullable: true, description: "Type of the card as visible, including any supertypes and subtypes"})
    @Column()
    type: string

    @Field(() => [String], {nullable: true, description: "List of all 'card types' of the card, including Un-sets and gameplay variants"})
    @Column("text",{array: true})
    types: string[]

    @Field(() => String, {nullable: false, description: "A universal unique ID (v5) generated by MTGJSON. Each entry is unique"})
    @Column()
    uuid: string

}