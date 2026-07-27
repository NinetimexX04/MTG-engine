import { Library } from "./library.js";
import { Exile } from "./exile.js";
import { Graveyard } from "./graveyard.js";
import { Health } from "./health.js";
import { Manapool } from "./manapool.js";
import { Card } from "./card.js"

export class Player {
    health: Health;
    deck: Library;
    manapool: Manapool;
    graveyard: Graveyard;
    exile: Exile;
    insance_ID: string;

    constructor(cards: Card[]) {
        this.deck = new Library(cards);
        this.health = new Health();
        this.manapool = new Manapool();
        this.graveyard = new Graveyard();
        this.exile = new Exile();
        this.insance_ID = crypto.randomUUID();
    }

}
