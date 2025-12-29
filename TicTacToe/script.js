const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");

let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

cells.forEach(cell => {
    cell.addEventListener("click", handleCellClick);
});

function handleCellClick() {
    const index = this.getAttribute("index");

    if (board[index] !== "" || !gameActive) return;

    board[index] = currentPlayer;
    this.textContent = currentPlayer;

    checkResult();
}

function checkResult() {
    let roundWon = false;

    for (let combo of winningCombinations) {
        const [a, b, c] = combo;

        if (
            board[a] &&
            board[a] === board[b] &&
            board[a] === board[c]
        ) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusText.textContent = `Player ${currentPlayer} wins!`;
        gameActive = false;
        return;
    }

    if (!board.includes("")) {
        statusText.textContent = "It's a draw";
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.textContent = `Player ${currentPlayer}'s turn`;
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    currentPlayer = "X";
    statusText.textContent = "";

    cells.forEach(cell => cell.textContent = "");
}
