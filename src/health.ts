import { Counter } from "./counters.js";

export class Health {
    static readonly DEFAULT_HEALTH = 40;
    private health: number;
    counters: Counter[];

    constructor(currentHealth: number = Health.DEFAULT_HEALTH) {
        if (!Number.isInteger(currentHealth) || currentHealth < 0) {
            throw new Error('Current health must be a non-negative whole number.');
        }
        this.health = currentHealth;
        this.counters = [];
    }
    
    reduceHealth(amount: number, roundUp: boolean = true): void {
        if (!Number.isFinite(amount) || amount < 0) {
            throw new Error('Amount must be a non-negative number.');
        }
        amount = roundUp ? Math.ceil(amount) : Math.floor(amount);
        this.health = Math.max(this.health - amount, 0);
    }
    
    increaseHealth(amount: number, roundUp: boolean = true): void {
        if (!Number.isFinite(amount) || amount < 0) {
            throw new Error('Amount must be a non-negative number.');
        }
        amount = roundUp ? Math.ceil(amount) : Math.floor(amount);
        this.health += amount
    }

    addCounter(name: string) {
        this.counters.push(new Counter(name));
    }
    
    get currentHealth(): number {
        return this.health;
    }

    get currentCounters(): Counter[] {
        return this.counters;
    }

    set healthAmount(amount: number) {
        if (amount < 0 || !Number.isInteger(amount)) {
            throw new Error('Amount must be a non-negative whole number.');
        }
        this.health = amount;
    }
    
}