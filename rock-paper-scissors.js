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

/** UI Updates */
const updateUiScores = (humanScore, computerScore) => {
  const humanScoreDiv = document.querySelector("#human-score");
  humanScoreDiv.textContent = "P1 Score: " + humanScore;
  
  const computerScoreDiv = document.querySelector("#computer-score");
  computerScoreDiv.textContent = "CPU Score: " + computerScore;
};

const updateUiRounds = rounds => {
  document.querySelector("#rounds").textContent = "Round: " + rounds;
};

const updateUiSelections = (humanChoice, computerChoice) => {
  const choiceToEmoji = {
    'rock': '🪨', 
    'paper': '📃', 
    'scissors': '✂️',
    'default': '❓' 
  };

  const humanSelection = document.querySelector("#human-selection");
  humanSelection.textContent = choiceToEmoji[humanChoice];
  const computerSelection = document.querySelector("#computer-selection");
  computerSelection.textContent = choiceToEmoji[computerChoice];
};

const updateUiResults = message => {
  const results = document.querySelector("#result-message");
  results.textContent = message;
};

/** Game methods */
const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors']; 
  const computerChoice = Math.floor(Math.random() * choices.length);
  return choices[computerChoice];
}

const resetGame = () => {
  humanScore = computerScore = rounds = 0;
  updateUiScores(0, 0); // Reset scores UI
  updateUiRounds(0);
  updateUiResults("");
  updateUiSelections("default", "default")

  const roundMessage = document.querySelector("#round-message");
  roundMessage.textContent = "Make your choice!";
};

/** Event Listeners */
const rockButton = document.querySelector("#rock-button");
rockButton.onclick = () => playRound('rock', getComputerChoice());

const paperButton = document.querySelector("#paper-button");
paperButton.onclick = () => playRound('paper', getComputerChoice());

const scissorsButton = document.querySelector("#scissors-button");
scissorsButton.onclick = () => playRound('scissors', getComputerChoice());

/** Data */
let humanScore = 0;
let computerScore = 0;
let rounds = 0

function playRound(humanChoice, computerChoice) {
  if (rounds === 5) {
    resetGame();
    return;
  }
  
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
  
  updateUiSelections(humanChoice, computerChoice);
  updateUiRounds(rounds);
  updateUiScores(humanScore, computerScore);

  // Print results
  if (rounds === 5) {
    updateUiResults(getResultMessage(humanScore, computerScore));
  } else {
    updateUiResults("");
  }
}
