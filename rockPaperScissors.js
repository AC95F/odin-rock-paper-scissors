function getComputerChoice() {
    let choice = "";
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
    }
    return choice;
}

function getHumanChoice() {
    return prompt("Please pick between rock, paper and scissors");
}

// function playGame() {
//     let computerScore = 0;
//     let humanScore = 0;

//     for (let i = 1; i <= 5; i++) {
//         console.log("Round " + (i));
//         playRound(getHumanChoice(), getComputerChoice());
//     }

//     console.log("You : " + humanScore + " - Computer : " + computerScore);

//     if (humanScore == computerScore) {
//         console.log("It's a tie!");
//     }
//     else if (humanScore > computerScore) {
//         console.log("You win!");
//     }
//     else {
//         console.log("The computer wins!");
//     }
// }

const resultDiv = document.querySelector(".result");
const scoreDiv = document.querySelector(".score");

let humanScore = 0;
let computerScore = 0;

function updateScore() {
    scoreDiv.textContent = "YOU " + humanScore + " COMPUTER " + computerScore;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    let winnerAnnouncement = "";
    let winner = "";

    if (humanChoice == computerChoice) {
        winner = "tie";
    }
    else if(humanChoice == "rock") {
        if (computerChoice == "paper") {
            winner = "computer";
        }
        else if (computerChoice == "scissors") {
            winner = "human";
        }
    }
    else if(humanChoice == "paper") {
        if (computerChoice == "rock") {
            winner = "human";
        }
        else if (computerChoice == "scissors") {
            winner = "computer";
        }
    }
    else if(humanChoice == "scissors") {
        if (computerChoice == "rock") {
            winner = "computer";
        }
        else if (computerChoice == "paper") {
            winner = "human";
        }
    }

    if (winner == "human") {
        humanScore += 1;
        winnerAnnouncement = humanChoice + " beats " + computerChoice + "! You win!";
    }
    else if (winner == "computer") {
        computerScore += 1;
        winnerAnnouncement = computerChoice + " beats " + humanChoice + "! You lose!";
    }
    else if (winner == "tie") {
        winnerAnnouncement = "Both players picked " + humanChoice + ", it's a tie!";
    }
    else {
        winnerAnnouncement = "Invalid input";
    }

    updateScore();
    resultDiv.textContent = winnerAnnouncement;
}

function checkWinner() {
    if (humanScore == 5 || computerScore == 5) {
        buttonRock.remove();
        buttonPaper.remove();
        buttonScissors.remove();
        if (humanScore > computerScore) {
            resultDiv.textContent = "You win!"
        }
        else {
            resultDiv.textContent = "The computer wins!"
        }
    }
}

const buttonRock = document.createElement("button");
buttonRock.textContent = "Rock";
buttonRock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
    checkWinner();
});

const buttonPaper = document.createElement("button");
buttonPaper.textContent = "Paper";
buttonPaper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
    checkWinner();
});

const buttonScissors = document.createElement("button");
buttonScissors.textContent = "Scissors";
buttonScissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
    checkWinner();
});

const mainDiv = document.querySelector(".main");

mainDiv.appendChild(buttonRock);
mainDiv.appendChild(buttonPaper);
mainDiv.appendChild(buttonScissors);

updateScore();