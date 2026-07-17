import { Card } from './card.js';
import { CardPile } from './cardpile.js';

export class Deck extends CardPile {
    static readonly STARTING_CARDS_AMOUNT_COMMANDER = 100;

    constructor(cards: Card[]) {
        super();

        if (!Array.isArray(cards)) {
            throw new Error('Deck cards must be an array.');
        }

        if (cards.length === 0) {
            throw new Error('Deck cannot be empty.');
        }

        if (cards.length !== Deck.STARTING_CARDS_AMOUNT_COMMANDER) {
            throw new Error(`Deck must contain ${Deck.STARTING_CARDS_AMOUNT_COMMANDER} cards.`);
        }
        this.cards = cards;
    }

    shuffle(): void {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
}
