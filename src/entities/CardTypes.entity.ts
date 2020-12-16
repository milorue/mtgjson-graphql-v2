import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { TypesEntity } from "./Types.entity";

@Entity({name: "card-types"})
@ObjectType("CardTypes")
export class CardTypesEntity extends BaseEntity {

    @Field(() => String, {nullable: false})
    @PrimaryGeneratedColumn()
    id: string

    @Field(() => TypesEntity, {nullable: true, description: "All possible subtypes and supertypes for Artifact cards. See the Types data model"})
    @Column(() => TypesEntity)
    artifact: TypesEntity

    @Field(() => TypesEntity, {nullable: true, description: "All possible subtypes and supertypes for Conspiracy cards. See the Types data model."})
    @Column(() => TypesEntity)
    conspiracy: TypesEntity

    @Field(() => TypesEntity, {nullable: true, description: "All possible subtypes and supertypes for Creature cards. See the Types data model."})
    @Column(() => TypesEntity)
    creature: TypesEntity

    @Field(() => TypesEntity, {nullable: true, description: "All possible subtypes and supertypes for Enchantment cards. See the Types data model."})
    @Column(() => TypesEntity)
    enchantment: TypesEntity

    @Field(() => TypesEntity, {nullable: true, description: "All possible subtypes and supertypes for Instant cards. See the Types data model."})
    @Column(() => TypesEntity)
    instant: TypesEntity

    @Field(() => TypesEntity, {nullable: true, description: "All possible subtypes and supertypes for Land cards. See the Types data model."})
    @Column(() => TypesEntity)
    land: TypesEntity

    @Field(() => TypesEntity, {nullable: true, description: "All possible subtypes and supertypes for Phenomenon cards. See the Types data model."})
    @Column(() => TypesEntity)
    phenomenon: TypesEntity

    @Field(() => TypesEntity, {nullable: true, description: "All possible subtypes and supertypes for Plane cards. See the Types data model."})
    @Column(() => TypesEntity)
    plane: TypesEntity

    @Field(() => TypesEntity, {nullable: true, description: "All possible subtypes and supertypes for Planeswalker cards. See the Types data model."})
    @Column(() => TypesEntity)
    planeswalker: TypesEntity

    @Field(() => TypesEntity, {nullable: true, description: "All possible subtypes and supertypes for Scheme cards. See the Types data model."})
    @Column(() => TypesEntity)
    scheme: TypesEntity

    @Field(() => TypesEntity, {nullable: true, description: "All possible subtypes and supertypes for Sorcery cards. See the Types data model."})
    @Column(() => TypesEntity)
    sorcery: TypesEntity

    @Field(() => TypesEntity, {nullable: true, description: "All possible subtypes and supertypes for Tribal cards. See the Types data model."})
    @Column(() => TypesEntity)
    tribal: TypesEntity

    @Field(() => TypesEntity, {nullable: true, description: "All possible subtypes and supertypes for Vanguard cards. See the Types data model."})
    @Column(() => TypesEntity)
    vanguard: TypesEntity

}