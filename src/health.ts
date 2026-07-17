export class Health {
    static readonly DEFAULT_HEALTH = 40;
    private health: number;
    
    constructor(currentHealth: number = Health.DEFAULT_HEALTH) {
        if (!Number.isInteger(currentHealth) || currentHealth < 0) {
            throw new Error('Current health must be a non-negative whole number.');
        }
        this.health = currentHealth;
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
    
    get currentHealth(): number {
        return this.health;
    }

    set healthAmount(amount: number) {
        if (amount < 0 || !Number.isInteger(amount)) {
            throw new Error('Amount must be a non-negative whole number.');
        }
        this.health = amount;
    }
    
}