"use strict";

// Variables to hold score
let playerScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const scoreboard = document.querySelector("#scoreboard");



document.getElementById("scoreboard").style.marginBottom= "25px";
document.getElementById("scoreboard").style.fontWeight= "600";


// Interactive buttons that play RPS when clicked
rockBtn.addEventListener("click", ()  => {
    playRound("rock", computerPlay())
});
paperBtn.addEventListener("click", () => {
    playRound("paper", computerPlay());
});
scissorsBtn.addEventListener("click", () => {
    playRound("scissors", computerPlay());
});

// Computer selects randomly RPS
function computerPlay(){
    const game = ["rock", "paper", "scissors"];
    const random = game [Math.floor(Math.random() * game.length)];
    return random;
}

// Compares players selection to computers selection each round
function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    
    
    
    console.log(computerScore)
    console.log(playerScore)
    if (computerSelection == "rock" && playerSelection == "scissors") {
        scoreboard.textContent = "You lose! Rock beats Scissors"
        computerScore++;
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        scoreboard.textContent = "You lose! Paper beats Rock"
        computerScore++;
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        scoreboard.textContent = "You lose! Scissors beats Paper"
        computerScore++;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        scoreboard.textContent = "You win! Rock beats Scissors"
        playerScore++;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        scoreboard.textContent = "You win! Paper beats Rock";
        playerScore++;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        scoreboard.textContent = "You win! Scissors beats Paper";
        playerScore++;
    } else if ( playerSelection == computerSelection){
        scoreboard.textContent = "No one wins, it was a tie";
    }
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
    declareWinner();
}

// Declares winner of the game
function declareWinner() {
    if (playerScore === 5) {
    scoreboard.textContent = "Congratulations! You won!";
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;

    } else if (computerScore === 5){
    scoreboard.textContent = "You lose. Computer triumphs.";
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    }
}