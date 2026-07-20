function parseDecklist(fileString: string) {
    if (typeof(fileString) !== 'string' || fileString.length === 0) {
        throw new Error('input needs to be a non-empty string for parsing.');
    }
    const cards = fileString.split('\n');
    let cardsNameAndAmount = [];
    for (let i=0; i < cards.length; i++) {
        if (cards[i].trim() === '') continue;
        let newCard: { amount: number, name: string } = {
            amount: parseInt(cards[i]?.trim().split(' ')[0]),
            name: cards[i]?.trim().split(' ').slice(1).join(' ')
        }
        cardsNameAndAmount.push(newCard);
    }

    return cardsNameAndAmount;
}

export default parseDecklist;

