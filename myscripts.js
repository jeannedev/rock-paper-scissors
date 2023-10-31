let playerChoice = prompt("Rock, paper, scissors?");
playerChoice = playerChoice.toLowerCase();

function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber < 1/3) {
    return 'rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

const computerChoice = getComputerChoice();

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'It\'s a tie.';
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return 'You win!';
  } else {
    return 'You lose.';
  }
}

console.log(`Computer: ${computerChoice}`);
console.log(`Human: ${playerChoice}`);
console.log(playRound(playerChoice, computerChoice));
