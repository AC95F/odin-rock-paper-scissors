let computerScore = 0;
let humanScore = 0;

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

    console.log(winnerAnnouncement);
}

playRound(getHumanChoice(), getComputerChoice());