import { registerEnumType } from "type-graphql";

export enum CardFace{
    FRONT = "front",
    BACK = "back",
}

registerEnumType(CardFace, {
    name: "CardFace"
})