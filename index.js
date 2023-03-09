let playerPoints = 0;
let computerScore = 0;
let round = 0;

function computerPlay() {
  const moves = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * moves.length);
  return moves[random];
}

function playRound(playerSelection, computerSelection) {


  if (playerSelection === computerSelection) {
    alert("It's a tie!");
  } 
  else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    alert("You win!");
    playerPoints++;
  } else {
    alert("You lose!");
    computerScore++;
  }

  round++;
}

function game() {

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Choose rock, paper, or scissors: ").toLowerCase();
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log("round", round, "|", "p -", playerSelection, "|", "cpu -", computerSelection);
  }

  if (playerPoints > computerScore) {
    console.log(`You win ${playerPoints}-${computerScore}!`);
  } else if (playerPoints < computerScore) {
    console.log(`You lose ${playerPoints}-${computerScore}.`);
  } else {
    console.log(`It's a tie ${playerPoints}-${computerScore}.`);
  }
}
