import { Card } from './card.ts';
import { getCardByName } from './services/scryfallClient.ts';

async function getCard(name: string): Promise<Card> {
    const card = await getCardByName(name);
    return Card.fromScryfallData(card);
}

const card_object = await getCard('Forest');

console.log(card_object);
console.log(card_object.getCardInfo());
console.log(card_object.getCardSubtypes());
console.log(card_object.getCardType());
console.log(card_object.isCreature());
