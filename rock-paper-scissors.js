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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (isWinner(humanChoice, computerChoice)) { 
      console.log(`You win! ${toTitleCase(humanChoice)} beats ${computerChoice}`);
      humanScore++;
    } else if (isLoser(humanChoice, computerChoice)) {
      console.log(`You lose! ${toTitleCase(computerChoice)} beats ${humanChoice}`);
      computerScore++;
    } else {
      console.log(`No winners. It's a tie!`)
    } 
  }

  const ROUNDS = 5;
  for (let i = 0; i < ROUNDS; i++) {
    playRound(getHumanChoice(), getComputerChoice())
  }
  
  // Print results
  console.log(getResultMessage(humanScore, computerScore));
}