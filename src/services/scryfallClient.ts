
const headers = {
    'Accept': 'application/json',
    'User-Agent': 'MTG-engine/1.0.0'
};

export async function getCardByName(name: string): Promise<any> {
    const response = await fetch(`https://api.scryfall.com/cards/named?exact=${encodeURIComponent(name)}`, {
        headers,
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch card data: ${response.status} ${response.statusText}`);
    }

    return response.json();
}

export async function getCardsBySet(set: string): Promise<any> {
    const response = await fetch(`https://api.scryfall.com/cards/search?q=${encodeURIComponent(`set:${set}`)}`, {
        headers,
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch cardset data: ${response.status} ${response.statusText}`);
    }

    return response.json();
}

