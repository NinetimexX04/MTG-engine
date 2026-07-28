import Card from "./Card";
import type { CardData } from "../../../types/type";

function Hand({ cards }: { cards: CardData[] }) {
    const maxOverlap = 100;
    const overlap = Math.min(maxOverlap, cards.length * 10)
    return (
        <div id='hand' className="zone">
            {cards.map((card, index) => (
                <Card key={index} url={card.url} name={card.name} leftMargin={ index === 0 ? 0 : -overlap } id={card.instanceId}/>
            ))}
        </div>
    );
}

export default Hand;