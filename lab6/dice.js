
// handles all dice logic: rolling, holding, and resetting

export class Dice {
    constructor(numDice = 5) {
        // 5 dice
        this.numDice = numDice;

        // store current values + held state
        this.values = Array(numDice).fill(1);
        this.held = Array(numDice).fill(false);
    }

    // rolls dice that are not held
    roll() {
        this.values = this.values.map((v, i) =>
            this.held[i] ? v : Math.floor(Math.random() * 6) + 1
        );
        return this.values;
    }

    // flips hold on or off for a die

    toggleHold(index) {
        if (index >= 0 && index < this.numDice) {
            this.held[index] = !this.held[index];
        }
    }

    // returns dice values
    getValues() {
        return [...this.values];
    }

    // returns which dice are held
    getHeld() {
        return [...this.held];
    }

    // resets everything back to default
    reset() {
        this.values.fill(1);
        this.held.fill(false);
    }
}