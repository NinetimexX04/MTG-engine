
export class Counter {
    currentCount: number;
    counterName: string;

    constructor(amount: number = 1, counterName: string = 'incremental') {
        if (!Number.isInteger(amount)){
            throw new Error('Amount must be a whole number.');
        }
        if (!(typeof counterName === 'string')){
            throw new Error('The counter name must be a string.');
        }
        this.currentCount = amount;
        this.counterName = counterName;
    }

    increaseCurrentCountNumber(amount: number = 1) {
        if (!Number.isInteger(amount)){
            throw new Error('Amount must be a whole number.');
        }
        this.currentCount += amount
    }

    decreaseCurrentCountNumber(amount: number = 1) {
        if (!Number.isInteger(amount)){
            throw new Error('Amount must be a whole number.');
        }
        this.currentCount -= amount
    }

    set currentCountNumber(amount: number) {
        if (!Number.isInteger(amount)){
            throw new Error('Amount must be a whole number.');
        }
    }

    get currentCountNumber() {
        return this.currentCount;
    }
}