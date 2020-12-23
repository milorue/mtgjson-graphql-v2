import { InputType, Field } from "type-graphql";
import { ListOrder } from "../types/enums/Order.enum";


// TODO make this input be able to use filters for ordering the list besides asc,desc
// like type, release date, etc.
@InputType()
class ListOrderInput {
    @Field(() => ListOrder)
    order: ListOrder

    // TODO add more filters for deck listings
}

export default ListOrderInput