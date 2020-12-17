import { InputType, Field } from "type-graphql";

@InputType()
class CardGetInput {

    @Field({nullable: true})
    uuid: string

    @Field({nullable: true})
    name: string
}

export default CardGetInput