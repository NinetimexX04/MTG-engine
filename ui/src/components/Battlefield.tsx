import Card from "./Card";
import type { CardData } from "../../../types/type";

function Battlefield({ cards }: { cards: CardData[] }) {
    return (
        <div id='battlefield' className="zone">
            {cards.map((card, index) => (
                <Card key={index} url={card.url} name={card.name} id={card.instanceId}/>
            ))}
        </div>
    );
}

export default Battlefield;