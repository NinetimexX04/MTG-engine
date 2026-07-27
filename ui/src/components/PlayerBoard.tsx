import { useState } from "react";
import Battlefield from "./Battlefield";
import CommanderZone from "./CommanderZone";
import Graveyard from "./Graveyard";
import Hand from "./Hand";
import Library from "./Library";
import { type CardData, type BoardProps } from "./type";

function PlayerBoard({ battlefieldCards, commanderCard, graveyardCards, handCards, libraryCards }: BoardProps) {
    const [library, setLibrary] = useState<CardData[]>(libraryCards);
    const [hand, setHand] = useState<CardData[]>(handCards);
    
    function drawCard(): void {
        const drawnCard = library.at(-1);
        if (!drawnCard) return;
        setLibrary(library.slice(0, -1));
        setHand([...hand, drawnCard])
    }

    return (
        <div id='playerboard'>
            <Battlefield cards={battlefieldCards} />
            <CommanderZone card={commanderCard} />
            <Graveyard cards={graveyardCards} />
            <Hand cards={hand} />
            <Library cards={library} drawCard={drawCard}/>
        </div>
    );
}

export default PlayerBoard;