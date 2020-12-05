import { InputType, Field } from "type-graphql";

@InputType()
class CardGetInput {

    @Field({nullable: true})
    uuid: string

    @Field({nullable: true})
    cardName: string
}

export default CardGetInput