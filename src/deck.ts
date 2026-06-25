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

    removeTop(amount: number = 1): Card[] {
        if (!Number.isInteger(amount) || amount <= 0) {
            throw new Error('Amount must be a positive integer.');
        }
        if (amount > this.cards.length) {
            throw new Error('Not enough cards to remove the requested amount.');
        }

        const removedCards = this.cards.splice(this.cards.length - amount, amount);
        this.cardAmount = this.cards.length;
        return removedCards;
    }

    removeBottom(amount: number = 1): Card[] {
        if (!Number.isInteger(amount) || amount <= 0) {
            throw new Error('Amount must be a positive integer.');
        }
        if (amount > this.cards.length) {
            throw new Error('Not enough cards to remove the requested amount.');
        }

        const removedCards = this.cards.splice(0, amount);
        this.cardAmount = this.cards.length;
        return removedCards;
    }

    removeAt(index: number, amount: number = 1): Card[] {
        if (!Number.isInteger(amount) || amount <= 0) {
            throw new Error('Amount must be a positive integer.');
        }
        if (amount > this.cards.length) {
            throw new Error('Not enough cards to remove the requested amount.');
        }
        if (!Number.isInteger(index) || index < 0 || index >= this.cards.length) {
            throw new Error('Please provide a valid index within the range of cards.');
        }

        const removedCards = this.cards.splice(index, amount);
        this.cardAmount = this.cards.length;
        return removedCards;
    }

    
}