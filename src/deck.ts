import { Card } from './card.js';
import { CardPile } from './cardpile.js';

export class Deck extends CardPile {
    static readonly STARTING_CARDS_AMOUNT_COMMANDER = 100;

    constructor(cards: Card[]) {
        super(Deck.STARTING_CARDS_AMOUNT_COMMANDER, cards);
        if (cards.length !== Deck.STARTING_CARDS_AMOUNT_COMMANDER) {
            throw new Error(`Deck must contain ${Deck.STARTING_CARDS_AMOUNT_COMMANDER} cards.`)
        }
        this.cards = cards;
    }
}
