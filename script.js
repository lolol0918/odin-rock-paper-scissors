// Rock paper scissors

// Define variables
const choices = ["rock", "paper", "scissors"];
const choiceEmojis = {
  rock: "✊",
  paper: "✋",
  scissors: "✌️"
};
let userScore = 0;
let computerScore = 0;

function playRound(userChoice, computerChoice) {
    // Compare Results
    // IF userChoice == computerChoice
    if (userChoice === computerChoice) {
        //     PRINT "It's a tie!"
        return "Its a tie";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        // You win!
        ++userScore;
        userScoreEl.innerText = userScore;
        
    } else {
        ++computerScore;
        computerScoreEl.innerText = computerScore;
    }

}

function getUserInput() {
    // let input = prompt("Enter Rock, Paper, or Scissors:");
    if (input) {
        return input.toLowerCase();
    }
    return null; // user canceled
}

const getComputerInput = () => {
    // Get Computer Input
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
};

// Event listener for three buttons
const buttons = document.querySelectorAll(".btn");
const userScoreEl = document.getElementById("userScore");
const computerScoreEl = document.getElementById("computerScore");
const userChoiceEl = document.getElementById("playerChoice");
const computerChoiceEl = document.getElementById("computerChoice");

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.dataset.choice; 
        const computerChoice = getComputerInput();
        userChoiceEl.innerText = `${choiceEmojis[userChoice]}`;
        computerChoiceEl.innerText = `${choiceEmojis[computerChoice]}`;
        playRound(userChoice, computerChoice);
        console.log("Player:", userScore, "Computer:", computerScore);
    });
});

// check who is the winner

// Add to the score

// IF user or computer reaches 5 declare them the winner

