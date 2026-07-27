import { Card } from './card.js';
import { CardPile } from './cardpile.js';

export class Library extends CardPile {
    static readonly STARTING_CARDS_AMOUNT_COMMANDER = 100;

    constructor(cards: Card[]) {
        super(Library.STARTING_CARDS_AMOUNT_COMMANDER, cards);
        if (cards.length !== Library.STARTING_CARDS_AMOUNT_COMMANDER) {
            throw new Error(`Deck must contain ${Library.STARTING_CARDS_AMOUNT_COMMANDER} cards.`)
        }
        this.cards = cards;
    }
}
