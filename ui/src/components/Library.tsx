import Card from "./Card";
import type { CardData } from "./type";

function Library({ cards, drawCard }: { cards: CardData[], drawCard: () => void  }) {
    if (!Array.isArray(cards)) {
        throw new Error('Cards needs to be a valid array');
    }
    const lastCard = cards.at(-1);
    return (
        <div id='library' className="zone" onClick={drawCard}>
            {lastCard && <Card url={lastCard.url} name={lastCard.name} />}
        </div>
    );
}

export default Library;