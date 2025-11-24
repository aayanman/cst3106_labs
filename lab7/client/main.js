import { Dice } from "./dice.js";
import { YatzyGame } from "./yatzyGame.js";

const game = new YatzyGame();

// Fetch dice results from server
async function rollDiceFromServer() {
    try {
        const res = await fetch("http://localhost:3000/roll-dices");
        const values = await res.json();

    } catch (err) {
        alert("Server offline");
    }
}

// Update UI dice
function updateDiceUI(values) {
    values.forEach((v, i) => {
        document.getElementById(`die-${i}`).textContent = diceUnicode(v);
    });
}

// Convert 1–6 to ⚀ ⚁ ⚂ ⚃ ⚄ ⚅
function diceUnicode(n) {
    return ["⚀","⚁","⚂","⚃","⚄","⚅"][n - 1];
}

// Handle roll button
document.querySelector(".btn--primary").addEventListener("click", async () => {
    const values = await rollDiceFromServer();
    if (!values) return;

    game.dice.values = values;  // update internal dice
    updateDiceUI(values);       // update screen
});
