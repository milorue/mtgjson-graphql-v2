import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, Float } from "type-graphql";

@Entity({ name: "card-prices" })
@ObjectType("CardPrices")
export class CardPriceEntity extends BaseEntity {
  @Field(() => String, { nullable: true })
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => String)
  @Column()
  uuid: string;

  @Field(() => String)
  @Column()
  format: string;

  @Field(() => String)
  @Column()
  provider: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  currency: string;

  @Field(() => String)
  @Column()
  date: string;

  @Field(() => String, { description: "Card types can be foil & normal" })
  @Column()
  cardType: string;

  @Field(() => String, { description: "Buylist or Retail" })
  @Column()
  listType: string;

  @Field()
  @Column({ nullable: true, type: "real" })
  price: number;
}
