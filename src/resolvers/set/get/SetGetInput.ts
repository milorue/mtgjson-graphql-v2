import { InputType, Field } from "type-graphql";

@InputType()
class SetGetInput{
    @Field({nullable: true})
    name: string

    @Field({nullable: true})
    code: string

    @Field({nullable: true})
    block: string

    @Field({nullable: true})
    keyruneCode: string

    @Field({nullable: true})
    mcmName: string

    @Field({nullable: true})
    mcmId: number

    @Field({nullable: true})
    mtgoCode: string

    @Field({nullable: true})
    parentCode: string

    @Field({nullable: true})
    releaseDate: string

    @Field({nullable: true})
    type: string
}

export default SetGetInput