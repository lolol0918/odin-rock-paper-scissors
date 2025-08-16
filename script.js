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

    // Reset previous glow
    userChoiceEl.classList.remove("win", "lose", "draw");
    computerChoiceEl.classList.remove("win", "lose", "draw");


    if (userChoice === computerChoice) {
        // draws them bih
        userChoiceEl.classList.add("draw");
        computerChoiceEl.classList.add("draw");
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        // You win!
        ++userScore;
        userScoreEl.innerText = userScore;
        // makes it glow
        userChoiceEl.classList.add("win");
        computerChoiceEl.classList.add("lose");

    } else {
        ++computerScore;
        computerScoreEl.innerText = computerScore;
        // makes it glow
        userChoiceEl.classList.add("lose");
        computerChoiceEl.classList.add("win");

    }
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
const resetBtn = document.getElementById("reset");

resetBtn.addEventListener('click', () => {
    location.reload();    
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.dataset.choice;
        const computerChoice = getComputerInput();

        // updates the board and shows what the players chose
        userChoiceEl.innerText = `${choiceEmojis[userChoice]}`;
        computerChoiceEl.innerText = `${choiceEmojis[computerChoice]}`;

        playRound(userChoice, computerChoice);
    });
});

// check who is the winner

// Add to the score

// IF user or computer reaches 5 declare them the winner

