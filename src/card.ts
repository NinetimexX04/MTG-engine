export class Card {
    name: string;
    manaCost?: string;
    oracleText?: string;
    typeLine: string;
    power?: number;
    toughness?: number;
    keywords?: string[];
    colors?: string[];
    colorIdentity?: string[];
    cmc?: number;
    id: string;
    oracleId: string;
    instanceId: string;

    constructor(name: string, manaCost: string | undefined, typeLine: string, id: string, oracleId: string) {
        if (!name) {
            throw new Error('Card name is required.');
        }
        if (!typeLine) {
            throw new Error('Card type line is required.');
        }
        if (!id) {
            throw new Error('Card ID is required.');
        }
        if (!oracleId) {
            throw new Error('Card oracle ID is required.');
        }
        this.name = name;
        this.manaCost = manaCost;
        this.typeLine = typeLine;
        this.id = id;
        this.oracleId = oracleId;
        this.instanceId = crypto.randomUUID();
    }

    getCardInfo(): string {
        return `${this.name} - ${this.typeLine}`;
    }

    getCardType(): string {
        return this.typeLine.split(' — ')[0].trim();
    }

    getCardSubtypes(): string[] {
        const subtypes = this.typeLine.split(' — ')[1];
        return subtypes ? subtypes.trim().split(' ') : [];
    }

    hasCardSubType(subtype: string): boolean {
        return this.getCardSubtypes()
        .some(s => s.toLowerCase() === subtype.toLowerCase());
    }

    hasKeyword(keyword: string): boolean {
        return this.keywords?.includes(keyword) ?? false;
    }

    hasColor(color: string): boolean {
        return this.colors?.includes(color) ?? false;
    }

    static fromScryfallData(data: any): Card {
        const card = new Card(data.name, data.mana_cost, data.type_line, data.id, data.oracle_id);
        card.oracleText = data.oracle_text;
        card.power = data.power ? parseInt(data.power) : undefined;
        card.toughness = data.toughness ? parseInt(data.toughness) : undefined;
        card.keywords = data.keywords;
        card.colors = data.colors;
        card.colorIdentity = data.color_identity;
        card.cmc = data.cmc;
        return card;
    }

    isCreature(): boolean {
        return this.getCardType() === 'Creature';
    }

}