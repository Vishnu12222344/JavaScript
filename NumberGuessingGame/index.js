let min = 1;
let max = 100;
let attempts = 0;
let target = Math.floor(Math.random() * (max - min + 1)) + min;

const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const result = document.getElementById("result");
const attemptsDisplay = document.getElementById("attempts");
const restartBtn = document.getElementById("restartBtn");

function resetGame() {
    attempts = 0;
    target = Math.floor(Math.random() * (max - min + 1)) + min;
    result.textContent = "";
    attemptsDisplay.textContent = "";
    guessInput.value = "";
    guessInput.disabled = false;
    guessBtn.disabled = false;
    restartBtn.style.display = "none";
}

guessBtn.onclick = function() {
    const guess = Number(guessInput.value);
    if (isNaN(guess) || guess < min || guess > max) {
        result.textContent = `Please enter a valid number between ${min} and ${max}.`;
        return;
    }
    attempts++;
    if (guess < target) {
        result.textContent = "Too low! Try again.";
    } else if (guess > target) {
        result.textContent = "Too high! Try again.";
    } else {
        result.textContent = `Congratulations! You guessed the number ${target} in ${attempts} attempts.`;
        guessInput.disabled = true;
        guessBtn.disabled = true;
        restartBtn.style.display = "inline";
    }
    attemptsDisplay.textContent = `Attempts: ${attempts}`;
};

restartBtn.onclick = resetGame;

resetGame();
