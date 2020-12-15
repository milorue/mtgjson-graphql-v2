import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { IdentifierEntity } from "./Identifiers.entity";

@Entity()
@ObjectType("CardToken")
export class CardTokenEntity {
    
    @Field(() => String, {nullable: true, description: "Name of the artist that illustrated the card art"})
    @Column({nullable: true})
    artist: string

    @Field(() => String, {nullable: true, description: "The ASCII (Basic/128) code formatted card name with no special unicode characters"})
    @Column({nullable: true})
    asciiName: string

    @Field(() => [String], {nullable: true, description: "List of the card's available printing types"})
    @Column("text", {array: true, nullable: true})
    availability: string[]

    @Field(() => String, {nullable: true, description: "Color of the card border"})
    @Column()
    borderColor: string

    @Field(() => [String], {nullable: true, description: "List of the colors found in manaCost, colorIndicator, and text"})
    @Column("text", {array: true, nullable: true})
    colorIdentity: string[]

    @Field(() => [String], {nullable: true, description: "List of all the colors in the color indicator (The symbol prefixed to a card's types)"})
    @Column("text", {array: true, nullable: true})
    colorIndicator: string[]

    @Field(() => [String], {nullable: true, description: "List of all colors in manaCost, colorIndicator. Some cards may not have a value, such as cards with 'Devoid' in its text"})
    @Column("text",{array: true, nullable: true})
    colors: string[]

    @Field(() => Number, {nullable: true, description: "Card rank on EDHRec"})
    @Column({nullable: true})
    edhrecRank: number

    @Field(() => String, {nullable: true, description: "Name on the face of the card"})
    @Column({nullable: true})
    faceName: string

    @Field(() => String, {nullable: true, description: "Italicized text found below the rules text that has no game function"})
    @Column({nullable: true})
    flavorText: string

    @Field(() => [String], {nullable: true, description: "The visual frame effect"})
    @Column("text",{array: true, nullable: true})
    frameEffects: string[]

    @Field(() => String, {nullable: true, description: "Version of the card frame style"})
    @Column({nullable: true})
    frameVersion: string

    @Field({nullable: true, description: "If the card be found in foil"})
    @Column()
    hasFoil: boolean

    @Field({nullable: true, description: "If the card can be found in non-foil"})
    @Column()
    hasNonFoil: boolean

    @Field(() => IdentifierEntity, {nullable: true})
    @Column(() => IdentifierEntity)
    identifiers: IdentifierEntity

    @Field({nullable: true, description: "If the card has full artwork"})
    @Column({nullable: true})
    isFullArt: boolean

    @Field({nullable: true, description: "If the card is only available in Magic: The Gathering Online"})
    @Column({nullable: true})
    isOnlineOnly: boolean

    @Field({nullable: true, description: "If the card is promotional"})
    @Column({nullable: true})
    isPromo: boolean

    @Field({nullable: true, description: "If the card has been reprinted"})
    @Column({nullable: true})
    isReprint: boolean

    @Field(() => [String], {nullable: true, description: "All keywords found on a card"})
    @Column("text", {nullable: true, array: true})
    keywords: string[]

    @Field(() => String, {nullable: true, description: "Type of card layout"})
    @Column()
    layout: string

    @Field(() => String, {nullable: true, description: "Planeswalker loyalty value"})
    @Column({nullable: true})
    loyalty: string

    @Field(() => String, {nullable: true, description: "Names of each face on the card. Card with multiple faces, like 'Split' and 'Meld' cards are given as delimiter. Example: Face 1 Name // Face 2 Name"})
    @Column()
    name: string

    @Field(() => String, {nullable: true, description: "Number of the card. Can be prefixed or suffixed with a * or other characters for promo sets"})
    @Column()
    number: string

    @Field(() => String, {nullable: true, description: "Power of the card"})
    @Column({nullable: true})
    power: string

    @Field(() => [String], {nullable: true, description: "List of promotional types for a card"})
    @Column("text",{nullable: true, array: true})
    promoTypes: string[]

    @Field(() => [String], {nullable: true, description: "The names of the cards that product this card"})
    @Column("text",{nullable: true, array: true})
    reverseRelated: string[]

    @Field(() => String, {nullable: true, description: "The set code that the card is from"})
    @Column()
    setCode: string

    @Field(() => String, {nullable: true, description: "Identifier of the card side. Used on cards with multiple faces"})
    @Column({nullable: true})
    side: string

    @Field(() => [String], {nullable: true, description: "List of card subtypes found after em-dash"})
    @Column("text",{array: true, nullable: true})
    subTypes: string[]

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

    @Field(() => String, {nullable: true, description: "Name of the watermark on the card"})
    @Column({nullable: true})
    watermark: string

}