import { InputType, Field } from "type-graphql";

@InputType()
class DeckMetaGetInput {
    @Field({nullable: true})
    code: string;

    @Field({nullable: true})
    name: string;
}

export default DeckMetaGetInput