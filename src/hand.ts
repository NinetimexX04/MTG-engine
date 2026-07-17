import { Card } from './card.js';
import { CardPile } from './cardpile.js';

export class Hand extends CardPile {
    static readonly MAX_CARDS = 7;
    
    constructor(cards: Card[] = []) {
        super(Hand.MAX_CARDS);
        this.cards = cards;
    }
}