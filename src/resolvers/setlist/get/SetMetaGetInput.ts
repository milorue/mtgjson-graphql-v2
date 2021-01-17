import { InputType, Field } from "type-graphql";

@InputType()
class SetMetaGetInput {
    @Field({nullable: true})
    code: string;

    @Field({nullable: true})
    name: string;
}

export default SetMetaGetInput