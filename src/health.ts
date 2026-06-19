export class Health {
    static readonly DEFAULT_HEALTH = 40;
    currentHealth: number;
    
    constructor(currentHealth: number = Health.DEFAULT_HEALTH) {
        if (!Number.isFinite(currentHealth) || currentHealth < 0) {
            throw new Error("Current health must be a non-negative number.");
        }
        this.currentHealth = currentHealth;
    }
    
    reduceHealth(amount: number, roundUp: boolean = true): void {
        if (!Number.isFinite(amount)) {
            throw new Error("Amount must be a number.");
        }
        if (roundUp) {
            amount = Math.ceil(amount);
        } else {
            amount = Math.floor(amount);
        }
        this.currentHealth = Math.max(this.currentHealth - Math.abs(amount), 0);
    }
    
    increaseHealth(amount: number, roundUp: boolean = true): void {
        if (!Number.isFinite(amount)) {
            throw new Error("Amount must be a number.");
        }
        if (roundUp) {
            amount = Math.ceil(amount);
        } else {
            amount = Math.floor(amount);
        }
        this.currentHealth += Math.abs(amount);
    }
    
    getCurrentHealth(): number {
        return this.currentHealth;
    }

    setHealth(amount: number): void{
        if (amount >= 0) {
            this.currentHealth = amount;
        } 
        else {
            throw new Error("Amount must be a non-negative number.");
        }
    }
    
}