
function getComputerChoice() {
  let random = Math.random(); 
  if (random <= 0.33) {
    return "Rock";
  } else if (random <= 0.66) {
    return "Paper";
  } else if (random <= 1) {
    return "Scissors";
  } else {
    return "Unexpected number";
  }
};

let computerChoice = getComputerChoice();

function getUserChoice() {
  let selectElement = document.querySelector("#dropdown-menu");
  document.querySelector(".output").textContent = selectElement.value;
  return selectElement.value;
}

let userChoice;
console.log(userChoice);
