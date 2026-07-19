interface ScryfallCard {
    name: string;
    mana_cost: string;
    type_line: string;
    id: string;
    oracle_id: string;
    oracle_text: string;
    power?: string;
    toughness?: string;
    keywords: string[];
    colors: string[];
    color_identity: string[];
    cmc: number;
    image_uris: Record<string, string>;
}

export class Card {
    name: string;
    manaCost: string | null;
    oracleText: string;
    typeLine: string;
    power?: number;
    toughness?: number;
    keywords: string[];
    colors: string[];
    colorIdentity: string[];
    cmc: number;
    id: string;
    oracleId: string;
    instanceId: string;
    card_image: URL;


    constructor(
        name: string, 
        manaCost: string | null = null,
        typeLine: string, 
        id: string, 
        oracleId: string, 
        oracleText: string, 
        keywords: string[] = [],
        colors: string[] = [],
        colorIdentity: string[] = [],
        cmc: number = 0,
        card_image: URL
    ) {

        if (!name?.trim()) {
            throw new Error('Card name is required.');
        }
        if (!typeLine?.trim()) {
            throw new Error('Card type line is required.');
        }
        if (!id?.trim()) {
            throw new Error('Card ID is required.');
        }
        if (!oracleId?.trim()) {
            throw new Error('Card oracle ID is required.');
        }
        if (oracleText == null) {
            throw new Error('Card oracle text is required.');
        }
        if (!Array.isArray(keywords)) {
            throw new Error('Card keywords must be an array.');
        }
        if (!Array.isArray(colors)) {
            throw new Error('Card colors must be an array.');
        }
        if (!Array.isArray(colorIdentity)) {
            throw new Error('Card color identity must be an array.');
        }
        if (!Number.isFinite(cmc) || cmc < 0) {
            throw new Error('Card CMC must be a non-negative number.');
        }
        if (!card_image) {
            throw new Error('Card must have a valid image url.');
        }

        this.name = name;
        this.manaCost = manaCost;
        this.typeLine = typeLine;
        this.id = id;
        this.oracleId = oracleId;
        this.oracleText = oracleText;
        this.instanceId = crypto.randomUUID();
        this.keywords = keywords;
        this.colors = colors;
        this.colorIdentity = colorIdentity;
        this.cmc = cmc;
        this.card_image = card_image;
    }

    hasCardSubType(subtype: string): boolean {
        return this.getCardSubtypes()
        .some(s => s.toLowerCase() === subtype.toLowerCase());
    }

    hasKeyword(keyword: string): boolean {
        return this.keywords.includes(keyword);
    }

    hasColor(color: string): boolean {
        return this.colors.includes(color);
    }

    static fromScryfallData(data: ScryfallCard): Card {
        const card = new Card(
            data.name, 
            data.mana_cost || null,
            data.type_line, 
            data.id, 
            data.oracle_id,
            data.oracle_text,
            data.keywords,
            data.colors,
            data.color_identity,
            data.cmc,
            new URL(data.image_uris['normal'])
        );
        card.power = data.power ? parseInt(data.power) : undefined;
        card.toughness = data.toughness ? parseInt(data.toughness) : undefined;
        return card;
    }

    get CardInfo(): string {
        return `${this.name} - ${this.typeLine}`;
    }

    get CardType(): string {
        return this.typeLine.split(' — ')[0].trim();
    }

    get CardSubtypes(): string[] {
        const subtypes = this.typeLine.split(' — ')[1];
        return subtypes ? subtypes.trim().split(' ') : [];
    }

    get isCreature(): boolean {
        return this.CardType === 'Creature';
    }

   
}