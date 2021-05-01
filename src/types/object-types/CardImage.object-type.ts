import { ObjectType, Field } from "type-graphql";

@ObjectType("CardImage")
export class CardImage {
    @Field(() => String, {nullable: true})
    scryfallImageUrl: string;

    @Field(() => String, {nullable: true})
    multiverseImageUrl: string;
}