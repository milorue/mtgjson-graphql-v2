import { registerEnumType } from "type-graphql";

export enum ListOrder {
    ASC = "ASC",
    DESC = "DESC"
}

registerEnumType(ListOrder, {
    name: "ListOrder"
})