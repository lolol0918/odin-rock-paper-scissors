// Rock paper scissors

// Define variables
const choices = ["rock", "paper", "scissors"];
const WINNING_SCORE = 5;
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
    checkWinner(userScore, computerScore);
}

const checkWinner = (userScore, computerScore) => {
    if (userScore >= WINNING_SCORE) {
        setTimeout(() => {
            alert("You won the game! 🎉");
            // disables all buttons
            buttons.forEach(button => {
                button.disabled = true;
            }, 50); //adds delay for the DOM to render
        })
    } else if (computerScore >= WINNING_SCORE) {
        setTimeout(() => {
            alert("You won the game! 🎉");
            // disables all buttons
            buttons.forEach(button => {
                button.disabled = true;
            });
        }, 50);
    }
};


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

