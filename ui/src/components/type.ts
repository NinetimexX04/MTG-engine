export type CardData = {
    name: string;
    url: string;
}

export type BoardProps = {
    battlefieldCards: CardData[];
    handCards: CardData[];
    libraryCards: CardData[];
    graveyardCards: CardData[];
    commanderCard: CardData;
}

