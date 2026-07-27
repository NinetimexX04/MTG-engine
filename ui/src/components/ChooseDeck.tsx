import parseDecklist from "../utils/parseDecklist";

function ChooseDeck() {
    async function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];
        if (!file) return;
        const text = await file.text();
        return parseDecklist(text);
    }

    return (
        <input type="file" accept=".txt" onChange={handleFileChange} />
    );
}

export default ChooseDeck;