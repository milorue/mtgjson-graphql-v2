import { Field, InputType } from "type-graphql";

@InputType()
class CardImageGetInput {
    @Field({nullable: true})
    cardName: string;

    @Field({nullable: true})
    scryfallId: string;

    @Field({nullable: true})
    multiverseId: string;
}

export default CardImageGetInput;