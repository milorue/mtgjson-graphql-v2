import { ObjectType, Field } from "type-graphql";

@ObjectType("PurchaseUrls")
export class PurchaseUrlsEntity{

    @Field({nullable: true, description: "URL to purchase a product on Card Kingdom"})
    cardKingdom: string

    @Field({nullable: true, description: "URL to purchase a foil product on Card Kingdom"})
    cardKingdomFoil: string

    @Field({nullable: true, description: "URL to purchase a product on Cardmarket"})
    cardmarket: string

    @Field({nullable: true, description: "URL to purchase a product on TCG Player"})
    tcgplayer: string
}