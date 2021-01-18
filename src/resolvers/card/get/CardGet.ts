import { CardEntity } from "../../../entities/Card.entity";
import { ContextInterface } from "../../../types/interfaces/Context.interface";
import CardGetInput from "./CardGetInput";
import PaginationInput from "../../../inputs/PaginationInput";
import { Like } from "typeorm";
import ListOrderInput from "../../../inputs/ListOrderInput";

const CardGet = async(cardInput: CardGetInput, {take, skip}: PaginationInput, {order}: ListOrderInput, ctx: ContextInterface): Promise<CardEntity[]> => {

    if(cardInput.uuid !== undefined){
        const card = await CardEntity.find(
            {
                where: {
                    uuid: cardInput.uuid,
                },
                take: take,
                skip: skip,
                order: {
                    name: order
                }
            }
        )
        if(!card){
            throw new Error("This card doesn't exist or we don't have data on it in our latest build")
        }
        return card
    }
    else if(cardInput) {

        //TODO make arrays better search experience
            
        const card = await CardEntity.find(
            {
                where: {
                    name: cardInput.name ? cardInput.name : Like("%"),
                    setCode: cardInput.setCode ? cardInput.setCode : Like("%"),
                    artist: cardInput.artist ? cardInput.artist : Like("%"),
                    // asciiName: cardInput.asciiName ? cardInput.asciiName : Like("%"),
                    // availability: cardInput.availability ? cardInput.availability : Like("%"),
                    // borderColor: cardInput.borderColor ? cardInput.borderColor : Like("%"),
                    // colorIdentity: cardInput.colorIdentity ? cardInput.colorIdentity : Like("%"),
                    // colorIndicator: cardInput.colorIndicator ? cardInput.colorIndicator : Like("%"),
                    // colors: cardInput.colors ? cardInput.borderColor : Like("%"), 
                    // convertedManaCost: cardInput.convertedManaCost ? cardInput.convertedManaCost : Like("%"),
                    // count: cardInput.count ? cardInput.count : Like("%"),
                    // duelDeck: cardInput.duelDeck ? cardInput.duelDeck : Like("%"),
                    // edhrecRank: cardInput.edhrecRank ? cardInput.edhrecRank : Like("%"),
                    // faceConvertedManaCost: cardInput.faceConvertedManaCost ? cardInput.faceConvertedManaCost : Like("%"),
                    // faceName: cardInput.faceName ? cardInput.faceName : Like("%"),
                    // flavorName: cardInput.flavorName ? cardInput.flavorName : Like("%"),
                    // flavorText: cardInput.flavorText ? cardInput.flavorText : Like("%"),
                    // frameEffects: cardInput.frameEffects ? cardInput.frameEffects : Like("%"),
                    // frameVersion: cardInput.frameVersion ? cardInput.frameVersion : Like("%"),
                    // hand: cardInput.hand ? cardInput.hand : Like("%"),
                    // hasContentWarning: cardInput.hasContentWarning ? cardInput.hasContentWarning : Like("%"),
                    // hasFoil: cardInput.hasFoil ? cardInput.hasFoil : Like("%"),
                    // hasAlternativeDeckLimit: cardInput.hasAlternativeDeckLimit ? cardInput.hasAlternativeDeckLimit : Like("%"),
                    // hasNonFoil: cardInput.hasNonFoil ? cardInput.hasNonFoil : Like("%"),
                    // isAlternative: cardInput.isAlternative ? cardInput.isAlternative : Like("%"),
                    // isFoil: cardInput.isFoil ? cardInput.isFoil : Like("%"),
                    // isFullArt: cardInput.isFullArt ? cardInput.isFullArt : Like("%"),
                    // isOnlineOnly: cardInput.isOnlineOnly ? cardInput.isOnlineOnly : Like("%"),
                    // isOversized: cardInput.isOversized ? cardInput.isOversized : Like("%"),
                    // isPromo: cardInput.isPromo ? cardInput.isPromo : Like("%"),
                    // isReprint: cardInput.isReprint ? cardInput.isReprint : Like("%"),
                    // isReserved: cardInput.isReserved ? cardInput.isReserved : Like("%"),
                    // isStarter: cardInput.isStarter ? cardInput.isStarter : Like("%"),
                    // isStorySpotlight: cardInput.isStorySpotlight ? cardInput.isStorySpotlight : Like("%"),
                    // isTextless: cardInput.isTextless ? cardInput.isTextless : Like("%"),
                    // isTimeshifted: cardInput.isTimeshifted ? cardInput.isTimeshifted : Like("%"),
                    // keywords: cardInput.keywords ? cardInput.keywords : Like("%"),
                    // layout: cardInput.layout ? cardInput.layout : Like("%"),
                    // life: cardInput.life ? cardInput.life : Like("%"),
                    // loyalty: cardInput.loyalty ? cardInput.loyalty : Like("%"),
                    // manaCost: cardInput.manaCost ? cardInput.manaCost : Like("%"),
                    // number: cardInput.number ? cardInput.number : Like("%"),
                    // originalText: cardInput.originalText ? cardInput.originalText : Like("%"),
                    // originalType: cardInput.originalType ? cardInput.originalType : Like("%"),
                    // otherFaceIds: cardInput.otherFaceIds ? cardInput.otherFaceIds : Like("%"),
                    // power: cardInput.power ? cardInput.power : Like("%"),
                    // printings: cardInput.printings ? cardInput.printings : Like("%"),
                    // promoTypes: cardInput.promoTypes ? cardInput.promoTypes : Like("%"),
                    // rarity: cardInput.rarity ? cardInput.rarity : Like("%"),
                    // side: cardInput.side ? cardInput.side : Like("%"),
                    // subTypes: cardInput.subTypes ? cardInput.subTypes : Like("%"),
                    // superTypes: cardInput.superTypes ? cardInput.superTypes : Like("%"),
                    text: cardInput.text ? cardInput.text : Like("%"),
                    // toughness: cardInput.toughness ? cardInput.toughness : Like("%"),
                    type: cardInput.type ? cardInput.type : Like("%"),
                    // types: cardInput.types ? cardInput.types : Like("%"),
                    // variation: cardInput.variation ? cardInput.variation : Like("%"),
                    // watermark: cardInput.watermark ? cardInput.watermark : Like("%"),
                    
                },
                take: take,
                skip: skip,
                order: {
                    name: order
                }
            }
        )
        if(!card){
            throw new Error("This card doesn't exist or we don't have data on it in our latest build")
        }
        return card
    }
    else{
        throw new Error("No card input was provided")
    }
    
}

export default CardGet