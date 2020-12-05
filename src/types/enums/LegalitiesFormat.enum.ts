import { registerEnumType } from "type-graphql";

export enum LegalitiesFormat{
    BRAWL = "brawl",
    COMMANDER = "commander",
    DUEL = "duel",
    FUTURE = "future",
    FRONTIER = "frontier",
    LEGACY = "legacy",
    MODERN = "modern",
    PAUPER = "pauper",
    PENNY = "penny",
    PIONEER = "pioneer",
    STANDARD = "standard",
    VINTAGE = "vintage",
}

registerEnumType(LegalitiesFormat, {
    name: "LegalitiesFormat"
})