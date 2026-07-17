import { Card } from './card.js';

export class CardPile {
    cards: Card[] = [];

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
        this.cards.push(...cards);
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
