// Default dice options
const options = [
    "Hope decides what to do",
    "Josh decides what to do",
    "Play a game",
    "Watch a movie",
    "Go out to dinner",
    "Cuddle time"
];

// Function to roll a dice
function rollDice() {
    const diceRoll = Math.floor(Math.random() * 6);
    const resultElement = document.getElementById("result");
    resultElement.textContent = `You rolled a ${diceRoll + 1}: ${options[diceRoll]}`;
}