import CardImageGetInput from "./CardImageInput";
import { CardEntity } from "../../../entities/Card.entity";
import { Like } from "typeorm";
import CardImageFaceInput from "./CardImageFaceInput";
import { CardFace } from "../../../types/enums/CardFace.enum";
import { CardImage } from "../../../types/object-types/CardImage.object-type";
import { generateScryfallImageUrl, generateMultiverseImageUrl } from "../../../util/GenerateImageUrls";
import { ContextInterface } from "../../../types/interfaces/Context.interface";

const CardImageGet = async({scryfallId, cardName, multiverseId}: CardImageGetInput, {face}: CardImageFaceInput, ctx: ContextInterface): Promise<CardImage> => {
    // if we don't have any identifiers throw an error
    if(!scryfallId && !cardName && !multiverseId){
        throw new Error("No image identifier input provided")
    }

    const card = await CardEntity.findOne(
        {
            where: {
                name: cardName ? cardName : Like("%"),
                identifiers: {
                    scryfallId: scryfallId ? scryfallId : Like("%"),
                    multiverseId: multiverseId ? multiverseId : Like("%")
                }
            }
        }
    )

    // if database comes back undefined somehow
    if(!card){
        throw new Error("This card doesn't exist or we don't have data on it in our latest build")
    }

    let cardImageResponse = new CardImage();

    switch(face){
        case CardFace.FRONT:
            cardImageResponse.scryfallImageUrl = generateScryfallImageUrl(card.identifiers.scryfallId, face);
            cardImageResponse.multiverseImageUrl = generateMultiverseImageUrl(card.identifiers.multiverseId);
            break;
        case CardFace.BACK:
            cardImageResponse.scryfallImageUrl = generateScryfallImageUrl(card.identifiers.scryfallId, face);
            cardImageResponse.multiverseImageUrl = generateMultiverseImageUrl(card.identifiers.multiverseId);
            break;
        default:
            throw new Error("Face must be either front or back")
    }

    return cardImageResponse;

}

export default CardImageGet;