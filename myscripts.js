function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber < 1 / 3) {
    return 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

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

function updateScore(playerWins, computerWins) {
  const scoreDisplay = document.getElementById('scoreDisplay');
  scoreDisplay.textContent = `Player: ${playerWins} | Computer: ${computerWins}`;

  if (playerWins === 5) {
    showResult('You win the game!');
  } else if (computerWins === 5) {
    showResult('Computer wins the game.');
  }
}

function showResult(result) {
  const resultDisplay = document.getElementById('resultDisplay');
  resultDisplay.textContent = result;
}

// Event listeners for buttons
document.getElementById('rockBtn').addEventListener('click', function () {
  playGame('rock');
});

document.getElementById('paperBtn').addEventListener('click', function () {
  playGame('paper');
});

document.getElementById('scissorsBtn').addEventListener('click', function () {
  playGame('scissors');
});

function playGame(playerSelection) {
  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);

  console.log(`You chose ${playerSelection}. Computer chose ${computerSelection}. Result: ${result}`);

  if (result === 'You win!') {
    playerWins++;
  } else if (result === 'You lose.') {
    computerWins++;
  }

  updateScore(playerWins, computerWins);
}

let playerWins = 0;
let computerWins = 0;