import { Field, InputType } from "type-graphql";

@InputType()
class DeckGetInput{
    @Field({nullable: true})
    name: string

    @Field({nullable: true})
    code: string
}

export default DeckGetInput