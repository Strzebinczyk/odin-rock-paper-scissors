
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
  document.querySelector(".computerOutput").textContent = result;
  return result;
};

function getUserChoice() {
  let result
  let selectElement = document.querySelector("#dropdownMenu");
  result = selectElement.value;
  document.querySelector(".userOutput").textContent = result;
  return result;
}

function playRound(userChoice, computerChoice) {
  document.querySelector(".roundNumber").textContent = roundNumber;
  roundNumber += 1;
  if ((userChoice == "Rock" && computerChoice == "Scissors") || (userChoice == "Paper" && computerChoice == "Rock") || (userChoice == "Scissors" && computerChoice == "Paper")) {
    return "win";
  } else if ((userChoice == "Rock" && computerChoice == "Paper") || (userChoice == "Paper" && computerChoice == "Scissors") || (userChoice == "Scissors" && computerChoice == "Rock")) {
    return "lose";
  } else {
    return "tie"
  }
}

function adjustScore(result) {
  document.querySelector(".result").textContent = result;

  switch (result) {
    case "win":
      userScore += 1;
      document.querySelector(".userScore").textContent = userScore;
      document.querySelector(".computerScore").textContent = computerScore;
      break;
    case "lose":
      computerScore += 1;
      document.querySelector(".userScore").textContent = userScore;
      document.querySelector(".computerScore").textContent = computerScore;
      break;
    case "tie":
      document.querySelector(".userScore").textContent = userScore;
      document.querySelector(".computerScore").textContent = computerScore;
      break;
    default:
      console.log("Something unexpected happened in adjustScore")
  }
}

function play() {
  userChoice = getUserChoice();
  computerChoice = getComputerChoice();
  adjustScore(playRound(userChoice, computerChoice));
}



let userChoice;
let computerChoice;
let userScore = 0;
let computerScore = 0;
let roundNumber = 1;
