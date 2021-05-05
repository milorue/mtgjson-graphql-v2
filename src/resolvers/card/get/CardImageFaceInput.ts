import { InputType, Field } from "type-graphql";
import { CardFace } from "../../../types/enums/CardFace.enum";

@InputType()
class CardImageFaceInput {
    @Field(() => CardFace, {defaultValue: CardFace.FRONT})
    face: CardFace;
}

export default CardImageFaceInput;