let userScore = 0;
let computerScore = 0;

// randomly pick for the computer
function getComputerChoice() {
  let rpsArray = ["rock", "paper", "scissors"];
  return rpsArray[Math.floor(Math.random() * rpsArray.length)];
}

// get user selection from prompt, make sure its valid if not repeat
function getUserChoice() {
  let userChoice = prompt("Enter rock, paper or scissors: ");
  let accepted = false;
  userChoice = userChoice.toLowerCase();
  while (!accepted) {
    switch (userChoice) {
      case "rock":
        accepted = true;
        return "rock";
      case "paper":
        accepted = true;
        return "paper";
      case "scissors":
        accepted = true;
        return "scissors";
      default:
        accepted = false;
        userChoice = prompt("Please try again...ROCK..PAPER..OR..SCISSORS!");
    }
  }
}

function whoIsTheWinner(computerChoice, userChoice) {
  if (computerChoice === userChoice) return "Draw";
  if (
    (computerChoice === "rock" && userChoice === "scissors") ||
    (computerChoice === "paper" && userChoice === "rock") ||
    (computerChoice === "scissors" && userChoice === "paper")
  ) {
    return "Computer Wins";
  } else {
    return "User Wins";
  }
}

function playRound() {
  let computerChoice = getComputerChoice();
  let userChoice = getUserChoice();
  console.log(`The computer choose: ${computerChoice}`);
  console.log(`The user choose: ${userChoice}`);
  let result = whoIsTheWinner(computerChoice, userChoice);
  if (result === "User Wins") userScore++;
  if (result === "Computer Wins") computerScore++;
  console.log(`Result: ${result}`);
  console.log("Score:");
  console.log(`User: ${userScore}`);
  console.log(`Computer: ${computerScore}`);
}

function bestOf() {
  // number of games that will be played
  for (let i = 0; i <= 2; i++) {
    playRound();
  }

  // confirm who the winner is
  if (userScore > computerScore) {
    console.log("User is a Winner!");
  } else if (userScore === computerScore) {
    console.log("It's a draw!");
  } else console.log("Computer has won");
}

bestOf();
