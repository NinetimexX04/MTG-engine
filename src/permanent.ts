import { Card } from "./card.js"
import { Counter } from "./counters.js";

export class Permanent {
    card: Card;
    isTapped: boolean;
    counters: Counter[];
    isFlipped: boolean;

    constructor(card: Card, isTapped: boolean = false, isFlipped: boolean = false, counters: Counter[] = []) {
        if (!(card instanceof Card)) {
            throw new Error('card must be a valid Card object.')
        }
        if (!Array.isArray(counters)) {
            throw new Error('Counters must be an array.');
        }
        if (!(typeof isTapped === 'boolean')) {
            throw new Error('isTapped needs to be a boolean vlaue.')
        }
        this.card = card;
        this.isTapped = isTapped;
        this.isFlipped = isFlipped;
        this.counters = counters;
    }

    addCounter() {
        this.counters.push(new Counter());
    }

    tap(bool: boolean = !this.isTapped) {
        this.isTapped = bool;
    }

    flip(bool: boolean = !this.isFlipped) {
        this.isFlipped = bool;
    }
}