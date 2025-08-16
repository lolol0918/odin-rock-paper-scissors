// Rock paper scissors

// Define variables
const choices = ["rock", "paper", "scissors"];
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
        userScore++;
        return "You win!";
    } else {
        computerScore++;
        return "Computer wins!";
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
}

// Event listener for three buttons
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.dataset.choice; 
        const computerChoice = getComputerInput();
        console.log(`${userChoice}  ${computerChoice}`)
    })
})

// check who is the winner

// Add to the score

// IF user or computer reaches 5 declare them the winner

