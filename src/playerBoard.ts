import { Library } from "./library.js";
import { Exile } from "./exile.js";
import { Graveyard } from "./graveyard.js";
import { Health } from "./health.js";
import { Manapool } from "./manapool.js";
import { Commander } from "./commander.js";
import type { Board } from "../types/type.js"
import { Card } from "./card.js";
import { Counter } from "./counters.js";

export class PlayerBoard {
    commander: Commander;
    health: Health;
    library: Library;
    manapool: Manapool;
    graveyard: Graveyard;
    exile: Exile;
    instanceId: string;
    counters: Counter[];

    constructor(board: Board) {
        this.commander = board.commanderCard;
        this.health = new Health();
        this.library = board.libraryCards;
        this.manapool = new Manapool();
        this.graveyard = board.graveyardCards;
        this.exile = board.exileCards;
        this.counters = [];
        this.instanceId = crypto.randomUUID();
    }
}
