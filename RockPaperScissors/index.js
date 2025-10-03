const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resDisplay = document.getElementById("resDisplay");
const playerScore=document.getElementById("playerScore");
const computerScore=document.getElementById("computerScore");
let pScore=0;
let cScore=0;

function playgame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let res = "";

    if (computerChoice === playerChoice) {
        res = "It's a tie";
    } else {
        switch (playerChoice) {
            case 'rock':
                res = (computerChoice === "scissors") ? "You Win" : "You Lost";

                break;
            case 'paper':
                res = (computerChoice === "rock") ? "You Win" : "You Lost";
                break;
            case 'scissors':
                res = (computerChoice === "paper") ? "You Win" : "You Lost";
                break;
        }
    }
    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resDisplay.textContent = res;

    switch(res){
        case "You Win":
            pScore++;
            playerScore.textContent=pScore;
            break;
        case "You Lost":
            cScore++;
            computerScore.textContent=cScore;
            break;
            
    }

}
