import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field } from "type-graphql";

@Entity({name: "set-list"})
@ObjectType("SetList")
export class SetListEntity extends BaseEntity {
    
    @Field(() => String, {nullable: false})
    @PrimaryGeneratedColumn()
    id: string

    @Field(() => Number, {nullable: true, description: "Number of cards in the set. Will default to totalSetSize if not available. Note that Wizards sometimes prints extra cards beyond the set size into promos or supplemental products."})
    @Column({nullable: true})
    baseSetSize: number

    @Field(() => String, {nullable: true, description: "Set code for the set"})
    @Column({nullable: true})
    code: string

    @Field({nullable: true, description: "If this set is only available in foil"})
    @Column({nullable: true})
    isFoilOnly: boolean

    @Field({nullable: true, description: "If this set is only available in Magic: The Gathering Online"})
    @Column({nullable: true})
    isOnlineOnly: boolean

    @Field({nullable: true, description: "If this set is only available in paper"})
    @Column({nullable: true})
    isPaperOnly: boolean

    @Field(() => String, {nullable: true, description: "Name of the set."})
    @Column()
    name: string

    @Field(() => String, {nullable: true, description: "Release date in ISO 8601 format for the set"})
    @Column({nullable: true})
    releaseDate: string

    @Field({nullable: true, description: "Total number of cards in the set, including promos and related supplemental products"})
    @Column({nullable: true})
    totalSetSize: number

    @Field(() => String, {nullable: true, description: "Expansion type of the set"})
    @Column({nullable: true})
    type: string

}