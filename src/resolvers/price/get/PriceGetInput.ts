import { InputType, Field } from "type-graphql";

@InputType()
class PriceGetInput {

    @Field({nullable: true})
    uuid: string;

    @Field({nullable: true, description: "Follows the format YYYY-MM-DD"})
    date: string;

    @Field({nullable: true, description: "paper or mtgio"})
    format: string;

    @Field({nullable: true, description: "foil or normal"})
    cardType: string;

    @Field({nullable: true, description: "buylist or retail"})
    listType: string;

    @Field({nullable: true, description: "The provider you want prices on"})
    provider: string
}

export default PriceGetInput