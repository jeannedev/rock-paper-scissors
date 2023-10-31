function playerChoice() {
  let result = prompt("Rock, paper, scissors?");
  return result;
}

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

function game() {
  let playerWins = 0;
  let computerWins = 0;

  const playerSelections = [];
  const computerSelections = [];

  const rounds = 5;

  for (let round = 1; round <= rounds; round++) {
    const playerSelection = playerChoice();
    const computerSelection = getComputerChoice();
    playerSelections.push(playerSelection);
    computerSelections.push(computerSelection);

    const result = playRound(playerSelection, computerSelection);

    console.log(`Round ${round}: You chose ${playerSelection}. Computer chose ${computerSelection}. Result: ${result}`);

    if (result === 'You win!') {
      playerWins++;
    } else if (result === 'You lose.') {
      computerWins++;
    }
  }

  if (playerWins > computerWins) {
    console.log('You win the game!');
  } else if (playerWins < computerWins) {
    console.log('Computer wins the game.');
  } else {
    console.log('It\'s a tie game.');
  }
}

game();
