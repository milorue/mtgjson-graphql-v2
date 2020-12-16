import { ObjectType, Field } from "type-graphql";
import { Entity, BaseEntity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany } from "typeorm";
import { ForeignDataEntity } from "./ForeignData.entity";
import { IdentifierEntity } from "./Identifiers.entity";
import { LeadershipEntity } from "./LeadershipSkills.entity";
import { LegalitiesEntity } from "./Legalities.entity";
import { PurchaseUrlsEntity } from "./PurchaseUrls.entity";
import { RulingsEntity } from "./Rulings.entity";

// Note where nullable: true is where attributes are optional when used on the column and nullable: true on the field
// when we want to be able to not be required to call that field when querying this entity.

@Entity({name: "cards"})
@ObjectType("Card")
export class CardEntity extends BaseEntity {

    @Field(() => String, {nullable: false})
    @PrimaryGeneratedColumn()
    id: string

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

    @Field(() => Number, {nullable: true, description: "The converted mana cost of the card"})
    @Column({nullable: true})
    convertedManaCost: number

    @Field(() => Number, {nullable: true, description: "How many of this card exists in a relevant deck"})
    @Column({nullable: true})
    count: number

    @Field(() => String, {nullable: true, description: "An indicator for which duel deck the card is in"})
    @Column({nullable: true})
    duelDeck: string

    @Field(() => Number, {nullable: true, description: "Card rank on EDHRec"})
    @Column({nullable: true})
    edhrecRank: number

    @Field(() => Number, {nullable: true, description: "The converted mana cost of the face of either half or part of the card"})
    @Column({nullable: true})
    faceConvertedManaCost: number

    @Field(() => String, {nullable: true, description: "Name on the face of the card"})
    @Column({nullable: true})
    faceName: string

    @Field(() => String, {nullable: true, description: "Promotional card name printed above the true card name on special cards that has no game function"})
    @Column({nullable: true})
    flavorName: string

    @Field(() => String, {nullable: true, description: "Italicized text found below the rules text that has no game function"})
    @Column({nullable: true})
    flavorText: string

    @Field(() => [ForeignDataEntity], {nullable: true})
    @Column("jsonb", {nullable: true})
    foreignData: ForeignDataEntity[]

    @Field(() => [String], {nullable: true, description: "The visual frame effect"})
    @Column("text",{array: true, nullable: true})
    frameEffects: string[]

    @Field(() => String, {nullable: true, description: "Version of the card frame style"})
    @Column({nullable: true})
    frameVersion: string

    @Field({nullable: true, description: "Starting maximum hand size total modifier. A plus or minus character proceeds an integer"})
    @Column({nullable: true})
    hand: string

    @Field({nullable: true, description: "If the card marked by Wizards of the Coast for having sensitive content. Cards with this property may have missing or degraded properties and values"})
    @Column({nullable: true})
    hasContentWarning: boolean

    @Field({nullable: true, description: "If the card be found in foil"})
    @Column()
    hasFoil: boolean

    @Field({nullable: true, description: "If the card allows a value other than 4 copies in a deck"})
    @Column({nullable: true})
    hasAlternativeDeckLimit: boolean

    @Field({nullable: true, description: "If the card can be found in non-foil"})
    @Column()
    hasNonFoil: boolean

    @Field(() => IdentifierEntity, {nullable: true})
    @Column(type => IdentifierEntity)
    identifiers: IdentifierEntity

    @Field({nullable: true, description: "The card has some kind of alternative variation to its printed counterpart"})
    @Column({nullable: true})
    isAlternative: boolean

    @Field({nullable: true, description: "If the card is in foil"})
    @Column({nullable: true})
    isFoil: boolean

    @Field({nullable: true, description: "If the card has full artwork"})
    @Column({nullable: true})
    isFullArt: boolean

    @Field({nullable: true, description: "If the card is only available in Magic: The Gathering Online"})
    @Column({nullable: true})
    isOnlineOnly: boolean

    @Field({nullable: true, description: "If the card is oversized"})
    @Column({nullable: true})
    isOversized: boolean

    @Field({nullable: true, description: "If the card is promotional"})
    @Column({nullable: true})
    isPromo: boolean

    @Field({nullable: true, description: "If the card has been reprinted"})
    @Column({nullable: true})
    isReprint: boolean

    @Field({nullable: true, description: "If the card is on the Magic: The Gathering Reserved List"})
    @Column({nullable: true})
    isReserved: boolean

    @Field({nullable: true, description: "If the card is found in a booster pack"})
    @Column({nullable: true})
    isStarter: boolean

    @Field({nullable: true, description: "If the card has a story spotlight"})
    @Column({nullable: true})
    isStorySpotlight: boolean

    @Field({nullable: true, description: "If the card does not have a text box"})
    @Column({nullable: true})
    isTextless: boolean

    @Field({nullable: true, description: "If this card is 'timeshifted', a feature from Time Spiral block"})
    @Column({nullable: true})
    isTimeshifted: boolean

    @Field(() => [String], {nullable: true, description: "All keywords found on a card"})
    @Column("text", {nullable: true, array: true})
    keywords: string[]

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

    @Field(() => String, {nullable: true, description: "Number of the card. Can be prefixed or suffixed with a * or other characters for promo sets"})
    @Column()
    number: string

    @Field(() => String, {nullable: true, description: "Text on the card as originally printed"})
    @Column({nullable: true})
    originalText: string

    @Field(() => String, {nullable: true, description: "Type as originally printed. Includes any supertypes and subtypes"})
    @Column({nullable: true})
    originalType: string

    @Field(() => [String], {nullable: true, description: "List of UUID's of this card with counterparts, such as transformed or melded faces"})
    @Column("text",{array: true, nullable: true})
    otherFaceIds: string[]

    @Field(() => String, {nullable: true, description: "Power of the card"})
    @Column({nullable: true})
    power: string

    @Field(() => [String], {nullable: true, description: "List of sets the card was printed in, in uppercase"})
    @Column("text",{nullable: true, array: true})
    printings: string[]

    @Field(() => [String], {nullable: true, description: "List of promotional types for a card"})
    @Column("text",{nullable: true, array: true})
    promoTypes: string[]

    @Field(() => PurchaseUrlsEntity, {nullable: true, description: "See the Purchase Urls data model"})
    @Column(() => PurchaseUrlsEntity)
    purchaseUrls: PurchaseUrlsEntity

    @Field(() => String, {nullable: true, description: "Card printing rarity"})
    @Column()
    rarity: string

    @Field(() => [RulingsEntity], {nullable: true, description: "See the Rulings data model"})
    @Column("jsonb", {nullable: true})
    rulings: RulingsEntity[]

    @Field(() => String, {nullable: true, description: "The set code that the card is from"})
    @Column()
    setCode: string

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

    @Field(() => [String], {nullable: true, description: "List of UUID's of this card with alternate printings in the same set. Excludes Un-sets"})
    @Column("text",{array: true, nullable: true})
    variation: string[]

    @Field(() => String, {nullable: true, description: "Name of the watermark on the card"})
    @Column({nullable: true})
    watermark: string

}