import { Card } from './card.js';

export class Deck {
    static readonly STARTING_CARDS_AMOUNT_COMMANDER = 100;
    cards: Card[];
    cardAmount: number;

    constructor(cards: Card[]) {
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
        this.cardAmount = cards.length;
    }

    shuffle(): void {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    drawCard(amount: number = 1): Card[] {
        if (this.cards.length === 0) {
            throw new Error('Cannot draw a card from an empty deck.');
        }
        if (amount > this.cards.length) {
            throw new Error('Not enough cards to draw the requested amount.');
        }
        const drawnCards = this.cards.splice(-amount, amount);
        this.cardAmount = this.cards.length;
        return drawnCards;
    }

    removeTopCards(amount: number = 1): Card[] {
        if (amount > this.cards.length){
            throw new Error('Not enough cards to remove the requested amount.');
        }
        const topCards = this.cards.splice(-amount, amount);
        this.cardAmount = this.cards.length;
        return topCards;
        }
    }

    

    }
}