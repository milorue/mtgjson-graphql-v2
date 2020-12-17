import { InputType, Int, Field } from "type-graphql";

@InputType()
class PaginationInput{
    
    take: number = 15;

    @Field(() => Int, {nullable: true, defaultValue: 0})
    skip: number;
}

export default PaginationInput;