
// handles scoring categories and placeholders

export class YatzyEngine {
    constructor() {
        // basic score table for all categories
        this.scoreTable = {
            ones: null,
            twos: null,
            threes: null,
            fours: null,
            fives: null,
            sixes: null,
            threeOfAKind: null,
            fourOfAKind: null,
            fullHouse: null,
            smallStraight: null,
            largeStraight: null,
            yatzy: null,
            chance: null,
        };
    }

    // placeholder for calculating score returns 0
    calculateScore(category, diceValues) {
        return 0;
    }

    // placeholder for checking if a category is valid
    isValidSelection(category, diceValues) {
        return true;
    }

    // records the score into the table if it’s unused
    record(category, value) {
        if (!(category in this.scoreTable)) return false;
        if (this.scoreTable[category] !== null) return false;
        this.scoreTable[category] = value;
        return true;
    }

    // adds up everything to get total
    total() {
        return Object.values(this.scoreTable).reduce((sum, v) => sum + (v ?? 0), 0);
    }
}