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

function getComputerInput(){
    // Get Computer Input
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];

}

// Loop for five rounds
for (let i = 0; i < 5; i++) {
    // Get User Input
    let userChoice = getUserInput();

    if (!choices.includes(userChoice)) {
        console.log("Please enter rock, paper, or scissors.");
        i--;
        continue;
    }

    // Get Computer Input
    let computerChoice = getComputerInput();

    console.log(playRound(userChoice, computerChoice));

}

// Compare both scores
// THEN print winner

console.log(`Final Score -- You: ${userScore} - Computer: ${computerScore}`);

if (userScore == computerScore) {
    console.log("It's a tie");
} else if (userScore > computerScore) {
    console.log("You win!");
} else {
    console.log("Computer wins!");
}



// Event listener for three buttons

// check who is the winner

// Add to the score

// IF user or computer reaches 5 declare them the winner

