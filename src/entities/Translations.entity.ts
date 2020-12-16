import { ObjectType, Field } from "type-graphql";
import { Entity, Column } from "typeorm";

@ObjectType("Translations")
@Entity()
export class TranslationsEntity{

    @Field(() => String, {nullable: true})
    @Column({nullable: true})
    AncientGreek: string

    @Field(() => String, {nullable: true})
    @Column({nullable: true})
    Arabic: string

    @Field(() => String, {nullable: true})
    @Column({nullable: true})
    ChineseSimplified: string

    @Field(() => String, {nullable: true})
    @Column({nullable: true})
    ChineseTraditional: string

    @Field(() => String, {nullable: true})
    @Column({nullable: true})
    French: string

    @Field(() => String, {nullable: true})
    @Column({nullable: true})
    German: string

    @Field(() => String, {nullable: true})
    @Column({nullable: true})
    Hebrew: string

    @Field(() => String, {nullable: true})
    @Column({nullable: true})
    Italian: string

    @Field(() => String, {nullable: true})
    @Column({nullable: true})
    Japanese: string

    @Field(() => String, {nullable: true})
    @Column({nullable: true})
    Korean: string

    @Field(() => String, {nullable: true})
    @Column({nullable: true})
    Latin: string

    @Field(() => String, {nullable: true})
    @Column({nullable: true})
    Phyrexian: string

    @Field(() => String, {nullable: true})
    @Column({nullable: true})
    PortugueseBrazil: string

    @Field(() => String, {nullable: true})
    @Column({nullable: true})
    Russian: string

    @Field(() => String, {nullable: true})
    @Column({nullable: true})
    Sanskrit: string

    @Field(() => String, {nullable: true})
    @Column({nullable: true})
    Spanish: string
}