/** Helper Methods */
const toTitleCase = str => str[0].toUpperCase() + str.substring(1);

const getResultMessage = (humanScore, computerScore) => {
  if (humanScore > computerScore) {
    return "You win the game!";
  } else if (humanScore < computerScore) {
    return "You lose the game!";
  } else {
    return "The game is a tie!";
  }
};

const isWinner = (humanChoice, computerChoice) =>
  humanChoice === 'rock' && computerChoice === 'scissors' ||
  humanChoice === 'paper' && computerChoice === 'rock' ||
  humanChoice === 'scissors' && computerChoice === 'paper';

const isLoser = (humanChoice, computerChoice) =>
  humanChoice === 'rock' && computerChoice === 'paper' ||
  humanChoice === 'paper' && computerChoice === 'scissors' ||
  humanChoice === 'scissors' && computerChoice === 'rock';

const resetGame = () => humanScore = computerScore = rounds = 0;
/*******************/

function getHumanChoice() {
  const humanChoice = prompt("Enter your choice (rock, paper, scissors): ");
  return humanChoice.toLowerCase();
}

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors']; 
  const computerChoice = Math.round(Math.random() * 3);
  return choices[computerChoice];
}

const rockButton = document.querySelector("#rock-button");
rockButton.onclick = () => playRound('rock', getComputerChoice());

const paperButton = document.querySelector("#paper-button");
paperButton.onclick = () => playRound('paper', getComputerChoice());

const scissorsButton = document.querySelector("#scissors-button");
scissorsButton.onclick = () => playRound('scissors', getComputerChoice());

let humanScore = 0;
let computerScore = 0;
let rounds = 0

function playRound(humanChoice, computerChoice) {
  const roundMessage = document.querySelector("#round-message");

  if (isWinner(humanChoice, computerChoice)) { 
    roundMessage.textContent = `You win! ${toTitleCase(humanChoice)} beats ${computerChoice}`
    humanScore++;
  } else if (isLoser(humanChoice, computerChoice)) {
    roundMessage.textContent = `You lose! ${toTitleCase(computerChoice)} beats ${humanChoice}`
    computerScore++;
  } else {
    roundMessage.textContent = `No winners. It's a tie!`;
  } 
  rounds++;

  const humanScoreDiv = document.querySelector("#human-score");
  humanScoreDiv.textContent = "Human Score: " + humanScore;

  const computerScoreDiv = document.querySelector("#computer-score");
  computerScoreDiv.textContent = "Computer Score: " + computerScore;

  const roundsDiv = document.querySelector("#rounds");
  roundsDiv.textContent = "Round: " + rounds;

  // Print results
  const resultMessage = document.querySelector("#result-message");
  if (rounds >= 5) {
    resultMessage.textContent = getResultMessage(humanScore, computerScore);
    resetGame();
  } else {
    resultMessage.textContent = "";
  }
}
