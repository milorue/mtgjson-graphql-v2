import { InputType, Field } from "type-graphql";
import { ListOrder } from "../../../types/enums/Order.enum";

@InputType()
class CardGetListInput {
    @Field(() => ListOrder)
    order: ListOrder

    // TODO add more filters for card listings
}

export default CardGetListInput