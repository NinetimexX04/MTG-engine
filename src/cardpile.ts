import { Card } from './card.js';

export class CardPile {
    cards: Card[];
    maxCardAmount?: number;

    constructor(maxCardAmount?: number, cards: Card[] = []) {
         if (!Array.isArray(cards)) {
            throw new Error('Cards must be an array.');
        }
        this.maxCardAmount = maxCardAmount;
        this.cards = cards;
    }

    removeTop(amount: number = 1): Card[] {
        if (!Number.isInteger(amount) || amount <= 0) {
            throw new Error('Amount must be a positive integer.');
        }
        if (amount > this.cards.length) {
            throw new Error('Not enough cards to remove the requested amount.');
        }

        return this.cards.splice(this.cards.length - amount, amount);
    }

    removeBottom(amount: number = 1): Card[] {
        if (!Number.isInteger(amount) || amount <= 0) {
            throw new Error('Amount must be a positive integer.');
        }
        if (amount > this.cards.length) {
            throw new Error('Not enough cards to remove the requested amount.');
        }

        return this.cards.splice(0, amount);
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

        return this.cards.splice(index, amount);
    }

    removeAtRandom(amount: number = 1): Card[] {
        if (!Number.isInteger(amount) || amount <= 0) {
            throw new Error('Amount needs to be a positive integer');
        }
        if (amount > this.cards.length) {
            throw new Error('Not enough cards to remove the requested amount.');
        }
        let cards: Card[] = [];
        for (let i=0; i<amount; i++){
            let j = Math.floor(Math.random() * this.cards.length);
            cards.push(...this.cards.splice(j, 1));
        }
        return cards;
    }

    peekAtRandom(amount: number = 1): Card[] {
        if (!Number.isInteger(amount) || amount <= 0) {
            throw new Error('Amount needs to be a positive integer');
        }
        if (amount > this.cards.length) {
            throw new Error('Not enough cards to remove the requested amount.');
        }
        const copy = [...this.cards];
        const cards: Card[] = [];
        for (let i = 0; i < amount; i++) {
            const j = Math.floor(Math.random() * copy.length);
            cards.push(...copy.splice(j, 1));
        }
        return cards;
    }

    addCards(cards: Card[]): void {
        if (!Array.isArray(cards)) {
            throw new Error('cards must be an array');
        }
        if (cards.length === 0) {
            throw new Error('cards must contain at least one value');
        }
        if (this.maxCardAmount !== undefined && cards.length + this.cards.length > this.maxCardAmount) {
            throw new Error(`Cannot exceed the maximum of ${this.maxCardAmount} cards`);
        }
        this.cards.push(...cards);
    }

     shuffle(): void {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    get isEmpty(): boolean {
        return this.cards.length === 0;
    }

    get cardAmount(): number {
        return this.cards.length;
    }

    get randomCard(): Card {
        return this.peekAtRandom(1)[0];
    }
}
