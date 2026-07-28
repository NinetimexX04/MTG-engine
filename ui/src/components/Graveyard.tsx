import Card from "./Card";
import type { CardData } from "../../../types/type";

function Graveyard({ cards }: { cards: CardData[] }) {
    if (!Array.isArray(cards)) {
        throw new Error('Cards needs to be a valid array');
    }
    const lastCard = cards.at(-1);
    return (
        <div id='graveyard' className="zone">
            {lastCard && <Card url={lastCard.url} name={lastCard.name} id={lastCard.instanceId}/>}
        </div>
    );
}

export default Graveyard;