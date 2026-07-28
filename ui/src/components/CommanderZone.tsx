import Card from "./Card";
import type { CardData } from "../../../types/type";

function CommanderZone({ card }: { card: CardData | undefined }) {
    return (
        <div id='commander-zone' className="zone">
            {card && <Card url={card.url} name={card.name} id={card.instanceId} />}
        </div>
    );
}

export default CommanderZone;