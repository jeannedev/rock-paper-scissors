function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber < 1/3) {
    return 'rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    return 'paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    return 'scissors';
  }
}

// Test the function
console.log(getComputerChoice());