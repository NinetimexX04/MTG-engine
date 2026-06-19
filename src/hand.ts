import { Card } from './card.js';

export class Hand {
    static readonly MAX_CARDS = 7;
    maxHandSize: number;
    cards: Card[];

    constructor(cards: Card[], maxHandSize: number = Hand.MAX_CARDS) {
        this.cards = cards;
        this.maxHandSize = maxHandSize;
    }

    

}