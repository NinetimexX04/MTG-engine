import { Card } from './card.js';

export class Hand {
    static readonly MAX_CARDS = 7;
    maxHandSize: number;
    cards: Card[];

    constructor(cards: Card[] = [], maxHandSize: number = Hand.MAX_CARDS) {
        if (Array.isArray(cards) === false) {
            throw new Error('Cards must be an array.');
        }
        if (maxHandSize < 0){
            throw new Error('Max hand size cannot be negative.');
        }
        this.cards = cards;
        this.maxHandSize = maxHandSize;
    }

    addCard(card: Card): void{
        if (!card) {
            throw new Error('Cannot add a null or undefined card to hand.');
        }
        this.cards.push(card)
    }

    removeCardByIndex(index: number): void{
        if (index < 0 || index >= this.cards.length) {
            throw new Error('Index out of bounds.');
        }
        this.cards.splice(index, 1)
    }

    getCardByIndex(index: number): Card{
        if (index < 0 || index >= this.cards.length) {
            throw new Error('Index out of bounds.');
        }
        return this.cards[index];
    }

}