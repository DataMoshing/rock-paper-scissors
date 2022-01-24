"use strict";

let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;


function playerPlay(){
    let playerPlay = prompt("Rock, Paper, Scissors?").toLowerCase()
    return playerPlay;
}

function computerPlay(){
    const game = ["rock", "paper", "scissors"];
    const random = game [Math.floor(Math.random() * game.length)];
    return random;
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = playerPlay();

    if (computerSelection == "rock" && playerSelection == "scissors") {
        ++computerScore;
        return "You lose! Rock beats Scissors";
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        ++computerScore;
        return "You lose! Paper beats Rock";
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        ++computerScore;
        return "You lose! Scissors beats Paper";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        ++playerScore;
        return "You win! Rock beats Scissors";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        ++playerScore;
        return "You win! Paper beats Rock";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        ++playerScore;
        return "You win! Scissors beats Paper";
    } else if ( playerSelection == computerSelection){
        return "No one wins, it was a tie";
    } else if (playerSelection == "" || playerSelection !== "rock" || playerSelection !== "paper" || playerSelection !== "scissors"){
        return "Error, please select rock, paper, or scissors"
    }
    
}
function declareWinner(playerScore,computerScore){
if (playerScore >= 5 && computerScore < 5)
    return "Congratulations! You win!"
  else (computerScore >= 5 && playerScore < 5)
    return "You lose. Try again."
}


function game(){
console.log(playRound())
console.log(playerScore, computerScore)
console.log(playRound())
console.log(playerScore, computerScore)
console.log(playRound())
console.log(playerScore, computerScore)
console.log(playRound())
console.log(playerScore, computerScore)
console.log(playRound())
console.log(playerScore, computerScore)
console.log(declareWinner())
}

game()


