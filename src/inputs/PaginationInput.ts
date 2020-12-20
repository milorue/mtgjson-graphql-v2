import { InputType, Int, Field } from "type-graphql";
import { Min, Max} from "class-validator";

@InputType()
class PaginationInput{
    
    @Field(() => Int)
    @Min(5)
    @Max(100)
    take: number = 15;

    @Field(() => Int, {nullable: true, defaultValue: 0})
    @Min(0)
    skip: number;
}

export default PaginationInput;