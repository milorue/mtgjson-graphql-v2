import { ObjectType, Field } from "type-graphql";

@ObjectType("LeadershipSkills")
export class LeadershipEntity{

    @Field({nullable: true, description: "If this card can be your commander in the Brawl format"})
    brawl: boolean

    @Field({nullable: true, description: "If this card can be your commander in the Commander/EDH format"})
    commander: boolean

    @Field({nullable: true, description: "If this card can be your commander in the Oathbreaker format"})
    oathbreaker: boolean
}