import { Card } from './card.js';

export class Deck {
    static readonly STARTING_CARDS_AMOUNT = 100;
    cards: Card[];
    cardAmount: number;

    constructor(cards: Card[]) {
        if (!Array.isArray(cards)) {
            throw new Error('Deck cards must be an array.');
        }

        if (cards.length === 0) {
            throw new Error('Deck cannot be empty.');
        }

        if (cards.length === Deck.STARTING_CARDS_AMOUNT) {
            throw new Error(`Deck must contain ${Deck.STARTING_CARDS_AMOUNT} cards.`);
        }
        this.cards = cards;
        this.cardAmount = cards.length;
    }
}