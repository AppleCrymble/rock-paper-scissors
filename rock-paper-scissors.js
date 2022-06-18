
const choices = ['rock', 'paper', 'scissors'];

function computerPlay(){
    return choices[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == computerSelection) return "Nobody wins the round.";

    if ((playerSelection == "rock" && computerSelection == "scissors")||
        (playerSelection == "scissors" && computerSelection == "paper")||
        (playerSelection == "paper" && computerSelection == "rock")) {
            return `The player wins the round. ${playerSelection} beats ${computerSelection}`;
    }

    if ((computerSelection == "rock" && playerSelection == "scissors")||
        (computerSelection == "scissors" && playerSelection == "paper")||
        (computerSelection == "paper" && playerSelection == "rock")) {
            return `The computer wins the round. ${computerSelection} beats ${playerSelection}`;
    }
}

function game(){
    let score = 0;
    for (let i = 0; i < 5; i++){
        let roundResult = playRound(prompt("Rock, paper, or scissors?"), computerPlay());
        console.log(roundResult);
        if (roundResult.includes("player")) {
            score ++;
        } 
        else if (roundResult.includes("computer")) {
            score --;
        }
    }
    if (score > 0){
        console.log("The player wins the game!");
    } else if (score < 0){
        console.log("The computer wins the game!");
    } else{
        console.log("The game was drawn.");
    }
}