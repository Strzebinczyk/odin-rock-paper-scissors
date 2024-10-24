
function getComputerChoice() {
  let random = Math.random(); 
  let result = "Undefined"
  if (random <= 0.33) {
    result = "Rock";
  } else if (random <= 0.66) {
    result = "Paper";
  } else if (random <= 1) {
    result = "Scissors";
  } else {
    result = "Unexpected number";
  }
  document.querySelector(".computerOutput").textContent = result
  return result
};

function getUserChoice() {
  let result
  let selectElement = document.querySelector("#dropdown-menu");
  result = selectElement.value;
  document.querySelector(".userOutput").textContent = result;
  return result;
}

function getChoices() {
  userChoice = getUserChoice();
  computerChoice = getComputerChoice();
}

let userChoice;
let computerChoice;
let userScore = 0;
let computerScore = 0;