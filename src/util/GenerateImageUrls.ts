import { CardFace } from "types/enums/CardFace.enum"

export const generateScryfallImageUrl = (id: string, face: CardFace) => {
    return `https://api.scryfall.com/cards/${id}?format=image&face=${face}`;
}

export const generateMultiverseImageUrl= (id: string) => {
    return `https://gatherer.wizards.com/Handlers/Image.ashx?type=card&multiverseid=${id}`
}