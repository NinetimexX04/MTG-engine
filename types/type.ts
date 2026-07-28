import { Card } from "../src/card.js";
import { Commander } from "../src/commander.js";
import { Exile } from "../src/exile.js";
import { Graveyard } from "../src/graveyard.js";
import { Hand } from "../src/hand.js";
import { Library } from "../src/library.js";

export type CardData = {
    name: string;
    url: string;
    instanceId: string;
    amount: number;
}

export type BoardProps = {
    battlefieldCards: CardData[];
    handCards: CardData[];
    libraryCards: CardData[];
    graveyardCards: CardData[];
    commanderCard: CardData;
}

export type Board = {
    commanderCard: Commander;
    libraryCards: Library;
    handCards: Hand;
    graveyardCards: Graveyard;
    battlefieldCards: Card[];
    exileCards: Exile;
}