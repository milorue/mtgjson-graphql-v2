import { ObjectType, Field } from "type-graphql";
import { Entity, Column } from "typeorm";

@ObjectType("Types")
@Entity()
export class TypesEntity{

    @Field({nullable: true, description: "All available subtypes of a card"})
    @Column("text",{array: true, nullable: true})
    subTypes: string[]

    @Field({nullable: true, description: "All available supertypes of a card"})
    @Column("text",{array: true, nullable: true})
    superTypes: string[]
}