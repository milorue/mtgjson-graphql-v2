import { ObjectType, Field } from "type-graphql";
import { Entity, Column } from "typeorm";

@ObjectType("PurchaseUrls")
@Entity()
export class PurchaseUrlsEntity{

    @Field({nullable: true, description: "URL to purchase a product on Card Kingdom"})
    @Column({nullable: true})
    cardKingdom: string

    @Field({nullable: true, description: "URL to purchase a foil product on Card Kingdom"})
    @Column({nullable: true})
    cardKingdomFoil: string

    @Field({nullable: true, description: "URL to purchase a product on Cardmarket"})
    @Column({nullable: true})
    cardmarket: string

    @Field({nullable: true, description: "URL to purchase a product on TCG Player"})
    @Column({nullable: true})
    tcgplayer: string
}