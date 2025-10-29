
// manages the game rounds, turns, and connects dicenengine

import { Dice } from "./dice.js";
import { YatzyEngine } from "./yatzyEngine.js";

export class YatzyGame {
    constructor({ numPlayers = 1, numRounds = 13 } = {}) {
        // basic setup
        this.currentPlayer = 1;
        this.numPlayers = numPlayers;
        this.currentRound = 1;
        this.numRounds = numRounds;
        this.rollsLeft = 3;
        this.isGameOver = false;

        // link the other two modules
        this.dice = new Dice(5);
        this.engine = new YatzyEngine();
    }

    // starts a new game
    startNewGame() {
        this.currentPlayer = 1;
        this.currentRound = 1;
        this.rollsLeft = 3;
        this.isGameOver = false;
        this.dice.reset();
        this.engine = new YatzyEngine();
        console.log("new game started");
    }

    // rolls dice if there are rolls left
    rollDice() {
        if (this.rollsLeft <= 0) {
            console.log("no rolls left");
            return this.dice.getValues();
        }

        const rolled = this.dice.roll();
        this.rollsLeft -= 1;
        console.log(`rolled: ${rolled.join(", ")} | rolls left: ${this.rollsLeft}`);
        return rolled;
    }

    // basic scoring flow
    score(category) {
        const diceValues = this.dice.getValues();

        if (!this.engine.isValidSelection(category, diceValues)) {
            console.log(`invalid category: ${category}`);
            return false;
        }

        const score = this.engine.calculateScore(category, diceValues);
        const added = this.engine.record(category, score);

        if (!added) {
            console.log(`${category} already used`);
            return false;
        }

        console.log(`scored ${score} on ${category}`);
        this.endTurn();
        return true;
    }

    // ends turn and moves to next round
    endTurn() {
        console.log(`turn ended for player ${this.currentPlayer} (round ${this.currentRound})`);
        this.currentRound++;
        this.rollsLeft = 3;
        this.dice.held.fill(false);

        if (this.currentRound > this.numRounds) {
            this.endGame();
        }
    }

    // ends the game and shows total
    endGame() {
        this.isGameOver = true;
        const total = this.engine.total();
        console.log(`game over — total score: ${total}`);
    }
}