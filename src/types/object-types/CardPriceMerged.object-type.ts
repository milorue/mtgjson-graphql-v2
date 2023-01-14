import { Field, ObjectType } from "type-graphql";
import { CardEntity } from "../../entities/Card.entity";
import { CardPriceEntity } from "../../entities/CardPrice.entity";

@ObjectType("CardPriceMerged")
export class CardPriceMerged {
  @Field(() => CardEntity, { nullable: true })
  cardInfo: CardEntity;

  @Field(() => CardPriceEntity, { nullable: true })
  priceInfo: CardPriceEntity;
}
