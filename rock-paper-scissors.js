function playGame() {
    function getHumanChoice() {
    const userChoice = prompt("Enter your choice (rock, paper, scissors):");
    return userChoice.toLowerCase();
  }

  function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']; 
    const computerChoice = Math.round(Math.random() * 3);
    return choices[computerChoice];
  }

  let userScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    switch (humanChoice.toLowerCase()) {
      case 'scissors':
        if (computerChoice === 'paper') {

        } else if (computerChoice === 'rock') {
          computerScore++;
          console.log("You lose! Rock beats scissors.")
        } else {
          console.log("No winners. It's a tie!")
        }
        break;
      case 'paper':
        if (computerChoice === 'rock') {
          userScore++;
          console.log("You win! Paper beats rock.")
        } else if (computerChoice === 'scissors') {
          computerScore++;
          console.log("You lose! Scissors beats paper.")
        } else {
          console.log("No winners. It's a tie!")
        }
        break;
      case 'rock':
        if (computerChoice === 'scissors') {
          userScore++;
          console.log("You win! Rock beats scissors.")
        } else if (computerChoice === 'paper') {
          computerScore++;
          console.log("You lose! Paper beats rock.")
        } else {
          console.log("No winners! It's a tie.")
        }
        break;
      default:
        break;
    }
  }

  const ROUNDS = 5;
  for (let i = 0; i < ROUNDS; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
  
    playRound(humanChoice, computerChoice)
  }

  if (userScore > computerScore) {
    console.log("You win!");
  } else if (userScore < computerScore) {
    console.log("You lose!");
  } else {
    console.log("It's a tie!");
  }
}