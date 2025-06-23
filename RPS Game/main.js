const choices = ["rock", "paper", "scissors"];

const getComputerChoices = () => {
  return choices[Math.floor(Math.random() * choices.length)];
};

const getWinner = (computerChoice, playerChoice) => {
  if (playerChoice === computerChoice) return `It is a tie!!`;

  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You Win";
  }
  return "Computer Wins";
};

let playGame = confirm("Should we play a game?");

while (playGame) {
  let playerInput = prompt("Enter rock, paper or scissors");
  if (!playerInput) {
    alert("You cancelled the game... Maybe next time");
    break;
  }

  let playerChoice = playerInput.trim().toLowerCase();

  if (!choices.includes(playerChoice)) {
    alert("Invalid input, Please enter either rock, paper or scissors");
    continue;
  }
  let computerChoice = getComputerChoices();

  let result = getWinner(playerChoice, computerChoice);

  alert(
    `You chose ${playerChoice}, \n computer chose ${computerChoice} \n ${result}`
  );

  playGame = confirm("Do you want to play again?");
}
alert("Thanks for playing.");
