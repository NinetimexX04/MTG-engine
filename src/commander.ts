import { Card } from "./card.js";

export class Commander {
    static readonly COST_INCREASE_AMOUNT = 2;
    extraManaCost: number;
    commanderCard: Card;
    
    constructor(card: Card) {
        this.extraManaCost = 0;
        this.commanderCard = card;
    }

    increaseExtraManaCost() {
        this.extraManaCost += Commander.COST_INCREASE_AMOUNT;
    }
}