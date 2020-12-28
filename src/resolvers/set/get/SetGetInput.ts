import { InputType, Field } from "type-graphql";

@InputType()
class SetGetInput{
    @Field({nullable: true})
    name: string

    @Field({nullable: true})
    code: string
}

export default SetGetInput