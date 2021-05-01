import { InputType, Field } from "type-graphql";
import { CardFace } from "../../../types/enums/CardFace.enum";

@InputType()
class CardImageFaceInput {
    @Field({defaultValue: CardFace.FRONT})
    face: CardFace;
}

export default CardImageFaceInput;