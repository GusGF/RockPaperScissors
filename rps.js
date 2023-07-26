let userScore = 0;
let computerScore = 0;
let drawScore = 0;
let userChoice = "";
let computerChoice = "";
let gameCntr = 0;
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resetBtn = document.getElementsByClassName("resetBtn");
const user = document.getElementById("user");
const computer = document.getElementById("computer");
const draw = document.getElementById("draw");
const userLabel = document.getElementById("userLabel");
const computerLabel = document.getElementById("computerLabel");
const drawLabel = document.getElementById("drawLabel");

// randomly pick for the computer
function getComputerChoice() {
  let rpsArray = ["rock", "paper", "scissors"];
  return rpsArray[Math.floor(Math.random() * rpsArray.length)];
}

// Add the event listeners
function initialisation() {
  rockBtn.addEventListener("click", getUserChoice);
  paperBtn.addEventListener("click", getUserChoice);
  scissorsBtn.addEventListener("click", getUserChoice);
  resetBtn[0].addEventListener("click", resetScores);
}

// Get computer choice, compare to user and return result
function whoIsTheWinner() {
  computerChoice = getComputerChoice();
  if (computerChoice === userChoice) return "draw";
  if (
    (computerChoice === "rock" && userChoice === "scissors") ||
    (computerChoice === "paper" && userChoice === "rock") ||
    (computerChoice === "scissors" && userChoice === "paper")
  ) {
    return "computer";
  } else {
    return "user";
  }
}

// Take input from user
function getUserChoice(e) {
  userChoice = e.target.id;
  // now we have input from user we can play
  letsPlay();
}

// update the scores
function letsPlay() {
  let winner = whoIsTheWinner();
  switch (winner) {
    case "draw":
      drawScore++;
      setBackGroundColorOfWinner("drawLabel");
      break;
    case "computer":
      computerScore++;
      setBackGroundColorOfWinner("computerLabel");
      break;
    case "user":
      userScore++;
      setBackGroundColorOfWinner("userLabel");
      break;
  }
  updateFormScores();
}

// output the score to the form
function updateFormScores() {
  user.innerText = userScore;
  computer.innerText = computerScore;
  draw.innerText = drawScore;
}

// Set all scores to zero
function resetScores() {
  userScore = 0;
  computerScore = 0;
  drawScore = 0;
  updateFormScores();
}

// Identify who won the last game
function setBackGroundColorOfWinner(winner) {
  // id's for the following have already be ascertained
  userLabel.style.backgroundColor = "gainsboro";
  drawLabel.style.backgroundColor = "gainsboro";
  computerLabel.style.backgroundColor = "gainsboro";
  // 'winner' is the label of the winner now we need it's ID
  const labelToChange = document.getElementById(winner);
  labelToChange.style.backgroundColor = "grey";
}

// add event listeners to the buttons
initialisation();
