import Card from "./Card";
import type { CardData } from "./type";

function Battlefield({ cards }: { cards: CardData[] }) {
    return (
        <div id='battlefield' className="zone">
            {cards.map((card, index) => (
                <Card key={index} url={card.url} name={card.name} />
            ))}
        </div>
    );
}

export default Battlefield;