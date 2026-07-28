import type { CardData } from '../types/type.js'
import { getCardByName } from "./services/scryfallClient.js";
import { Card } from "./card.js";
import { Commander } from "./commander.js";
import { Library } from "./library.js";
import { Graveyard } from "./graveyard.js";
import { Hand } from "./hand.js";
import type { Board } from '../types/type.js';
import { Exile } from './exile.js';

async function createBoard(cards: CardData[]): Promise<Board> {
    if (!cards || !Array.isArray(cards)) {
        throw new Error('Cards must be an array with length of 100.')
    }

    const libraryCardsArray = [];
    for (let i=0; i < cards.length; i++) {
        let ScryfallCard = await getCardByName(cards[i].name);
        let card = Card.fromScryfallData(ScryfallCard);
        libraryCardsArray.push(card);
    }
    const library = (new Library(libraryCardsArray));
    const commanderCard = new Commander(library.removeAt(library.cards.length-1, 1)[0])
    library.shuffle();
    const hand = new Hand(library.removeTop(7));

    const board: Board = {
        commanderCard: commanderCard,
        libraryCards: library,
        handCards: hand,
        graveyardCards: new Graveyard(),
        battlefieldCards: [],
        exileCards: new Exile()
    }
    return board;
}

export default createBoard;
