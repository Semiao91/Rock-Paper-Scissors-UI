let playerPoints = 0;
let computerScore = 0;
let round = 0;
const moves = ["rock", "paper", "scissors"];
const playerPointsSpan = document.getElementById("player-points");
const cpuPointsSpan = document.getElementById("cpu-points");
const roundSpan = document.getElementById("round");
const checkPlayer = document.getElementById("player-result");
const checkCpu = document.getElementById("cpu-result");
const restartButton = document.getElementById("restart-button");
const playerChoice = document.getElementById("player-choice");
const cpuChoice = document.getElementById("cpu-choice");
const buttons = document.querySelectorAll('.button');

restartButton.style.display = "none";

const computerPlay = () => moves[Math.floor(Math.random() * moves.length)];

function playRound(playerSelection, computerSelection) {

    roundSpan.textContent = `Round: ${round + 1}`;

    if (playerSelection === computerSelection) {
      playerPoints++;
      computerScore++;
      playerChoice.textContent = `You chose ${playerSelection}`;
      cpuChoice.textContent = `You chose ${computerSelection}`;
      playerPointsSpan.textContent = `Player points: ${playerPoints}`;
      cpuPointsSpan.textContent = `CPU points: ${computerScore}`;
      checkCpu.textContent = "Tie";
      checkPlayer.textContent = "Tie";
      checkPlayer.setAttribute("class", "pop-glow");
      checkCpu.setAttribute("class", "pop-glow");
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      playerPoints++;
      playerChoice.textContent = `You chose ${playerSelection}`;
      cpuChoice.textContent = `You chose ${computerSelection}`;
      playerPointsSpan.textContent = `Player points: ${playerPoints}`;
      checkPlayer.textContent = "Win"
      checkPlayer.setAttribute("class", "pop-glow-win");
      checkCpu.textContent = "Loose"
      checkCpu.setAttribute("class", "pop-glow-loose");
    } else {
      computerScore++;
      playerChoice.textContent = `You chose ${playerSelection}`;
      cpuChoice.textContent = `You chose ${computerSelection}`;
      cpuPointsSpan.textContent = `CPU points: ${computerScore}`;
      checkPlayer.textContent = "Loose";
      checkPlayer.setAttribute("class", "pop-glow-loose");
      checkCpu.textContent = "Win"
      checkCpu.setAttribute("class", "pop-glow-win");
    }
  
    round++;
  
    if (playerPoints === 5 || computerScore === 5) {
      gameOver();
      buttons.forEach(button => button.style.display = 'none');
      restartButton.style.display = "block";
    }
  
}

function gameOver() {
  
  if (playerPoints > computerScore) {
    checkPlayer.textContent = "Win"
    checkPlayer.setAttribute("class", "pop-glow-win");
    checkCpu.textContent = "Loose"
    checkCpu.setAttribute("class", "pop-glow-loose");
    roundSpan.textContent = `Player wins ${playerPoints}-${computerScore}!`;
  } else if (playerPoints < computerScore) {
    checkPlayer.textContent = "Loose";
    checkPlayer.setAttribute("class", "pop-glow-loose");
    checkCpu.textContent = "Win"
    checkCpu.setAttribute("class", "pop-glow-win");
    roundSpan.textContent = `CPU wins ${computerScore}-${playerPoints}!`;
  } else {
    checkPlayer.textContent = "Tie";
    checkPlayer.setAttribute("class", "pop-glow");
    checkCpu.textContent = "Tie"
    checkCpu.setAttribute("class", "pop-glow");
    roundSpan.textContent = `Its a tie${computerScore}-${playerPoints}!`;
  }
}

restartButton.onclick = () => {
  playerPoints = 0;
  computerScore = 0;
  round = 0;
  playerPointsSpan.textContent = "Player points: 0";
  cpuPointsSpan.textContent = "CPU points: 0";
  roundSpan.textContent = "Round: 0";
  checkPlayer.textContent = "Player";
  checkPlayer.setAttribute("class", "player")
  checkCpu.textContent = "CPU";
  checkCpu.setAttribute("class", "cpu");
  playerChoice.textContent = "";
  cpuChoice.textContent= "";
  buttons.forEach(button => button.style.display = "block");
  restartButton.style.display = "none";
};

