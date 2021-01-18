import { InputType, Field } from "type-graphql";

@InputType()
class CardGetInput {

    @Field({nullable: true})
    uuid: string

    @Field({nullable: true})
    name: string

    @Field({nullable: true})
    setCode: string

    @Field({nullable: true})
    artist: string

    // @Field({nullable: true})
    // asciiName: string

    // @Field(() => [String], {nullable: true})
    // availability: string[]

    // @Field({nullable: true})
    // borderColor: string

    // @Field(() => [String], {nullable: true})
    // colorIdentity: string[]

    // @Field(() => [String], {nullable: true})
    // colorIndicator: string[]

    // @Field(() => [String], {nullable: true})
    // colors: string[]

    // @Field({nullable: true})
    // convertedManaCost: number

    // @Field({nullable: true})
    // count: number

    // @Field({nullable: true})
    // duelDeck: string

    // @Field({nullable: true})
    // edhrecRank: number

    // @Field({nullable: true})
    // faceConvertedManaCost: number

    // @Field({nullable: true})
    // faceName: string
    
    // @Field({nullable: true})
    // flavorName: string

    // @Field({nullable: true})
    // flavorText: string

    // @Field({nullable: true})
    // frameEffects: string

    // @Field({nullable: true})
    // frameVersion: string

    // @Field({nullable: true})
    // hand: string

    // @Field({nullable: true})
    // hasContentWarning: boolean

    // @Field({nullable: true})
    // hasFoil: boolean

    // @Field({nullable: true})
    // hasAlternativeDeckLimit: boolean

    // @Field({nullable: true})
    // hasNonFoil: boolean

    // @Field({nullable: true})
    // isAlternative: boolean

    // @Field({nullable: true})
    // isFoil: boolean

    // @Field({nullable: true})
    // isFullArt: boolean

    // @Field({nullable: true})
    // isOnlineOnly: boolean

    // @Field({nullable: true})
    // isOversized: boolean

    // @Field({nullable: true})
    // isPromo: boolean

    // @Field({nullable: true})
    // isReprint: boolean

    // @Field({nullable: true})
    // isReserved: boolean

    // @Field({nullable: true})
    // isStarter: boolean

    // @Field({nullable: true})
    // isStorySpotlight: boolean

    // @Field({nullable: true})
    // isTextless: boolean

    // @Field({nullable: true})
    // isTimeshifted: boolean

    // @Field(() => [String],{nullable: true})
    // keywords: string[]

    // @Field({nullable: true})
    // layout: string

    // @Field({nullable: true})
    // life: string

    // @Field({nullable: true})
    // loyalty: string

    // @Field({nullable: true})
    // manaCost: string

    // @Field({nullable: true})
    // number: string

    // @Field({nullable: true})
    // originalText: string

    // @Field({nullable: true})
    // originalType: string

    // // @Field(() => [String],{nullable: true})
    // // otherFaceIds: string[]

    // @Field({nullable: true})
    // power: string

    // @Field(() => [String],{nullable: true})
    // printings: string[]

    // @Field(() => [String],{nullable: true})
    // promoTypes: string[]

    // @Field({nullable: true})
    // rarity: string

    // @Field({nullable: true})
    // side: string

    // @Field(() => [String],{nullable: true})
    // subTypes: string[]

    // @Field(() => [String],{nullable: true})
    // superTypes: string[]

    @Field({nullable: true})
    text: string

    // @Field({nullable: true})
    // toughness: string

    @Field({nullable: true})
    type: string

    // @Field(() => [String],{nullable: true})
    // types: string[]

    // @Field(() => [String],{nullable: true})
    // variation: string[]

    // @Field({nullable: true})
    // watermark: string
    
}

export default CardGetInput