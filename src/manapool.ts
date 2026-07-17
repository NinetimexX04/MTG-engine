type manaColor = 'black' | 'white' | 'red' | 'blue' | 'green' | 'colorless';

export class Manapool {
    black: number = 0;
    white: number = 0;
    red: number = 0;
    blue: number = 0;
    green: number = 0;
    colorless: number = 0;

    addMana(color: manaColor, amount: number = 1): void {
        if (!Number.isInteger(amount) || amount < 0) {
            throw new Error('Amount must be a non-negative integer');
        }
        this[color] += amount;
    }

    empty(): void {
        for (const color of Object.keys(this) as manaColor[]) {
            this[color] = 0;
        }
    }

    set blackMana(amount: number) {
        if (!Number.isInteger(amount) || amount < 0) {
            throw new Error('Amount must be a non-negative integer');
        }
        this.black = amount;
    }

    set whiteMana(amount: number) {
        if (!Number.isInteger(amount) || amount < 0) {
            throw new Error('Amount must be a non-negative integer');
        }
        this.white = amount;
    }

    set redMana(amount: number) {
        if (!Number.isInteger(amount) || amount < 0) {
            throw new Error('Amount must be a non-negative integer');
        }
        this.red = amount;
    }

    set blueMana(amount: number) {
        if (!Number.isInteger(amount) || amount < 0) {
            throw new Error('Amount must be a non-negative integer');
        }
        this.blue = amount;
    }

    set greenMana(amount: number) {
        if (!Number.isInteger(amount) || amount < 0) {
            throw new Error('Amount must be a non-negative integer');
        }
        this.green = amount;
    }

    set colorlessMana(amount: number) {
        if (!Number.isInteger(amount) || amount < 0) {
            throw new Error('Amount must be a non-negative integer');
        }
        this.colorless = amount;
    }
}