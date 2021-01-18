import { InputType, Field } from "type-graphql";

@InputType()
class DeckMetaGetInput {
    @Field({nullable: true})
    code: string;

    @Field({nullable: true})
    name: string;

    @Field({nullable: true})
    fileName: string;

    @Field({nullable: true})
    releaseDate: string
}

export default DeckMetaGetInput