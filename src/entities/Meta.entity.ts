import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, VersionColumn } from "typeorm";
import { ObjectType, Field } from "type-graphql";

@Entity({name: "meta"})
@ObjectType("Meta")
export class MetaEntity extends BaseEntity{

    @Field(() => String, {nullable: false})
    @PrimaryGeneratedColumn()
    id: string

    @Field(() => String, {nullable: true, description: "ISO 8601 date of the MTGJSON build."})
    @Column({nullable: true})
    date: string

    @Field(() => String, {nullable: true, description: "SemVer specification of the MTGJSON build."})
    @Column({nullable: true})
    version: string

    @Field({nullable: true, description: "The postgres MTGJSON database iteration"})
    @VersionColumn({name: "dbVersion", default: 1})
    dbVersion: number;
}