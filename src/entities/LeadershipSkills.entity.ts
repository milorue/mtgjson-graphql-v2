import { ObjectType, Field } from "type-graphql";
import { Entity, Column } from "typeorm";

@ObjectType("LeadershipSkills")
export class LeadershipEntity{

    @Field({nullable: true, description: "If this card can be your commander in the Brawl format"})
    @Column({nullable: true})
    brawl: boolean

    @Field({nullable: true, description: "If this card can be your commander in the Commander/EDH format"})
    @Column({nullable: true})
    commander: boolean

    @Field({nullable: true, description: "If this card can be your commander in the Oathbreaker format"})
    @Column({nullable: true})
    oathbreaker: boolean
}