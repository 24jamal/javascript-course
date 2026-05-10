const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerCountP = document.getElementById("playerCount");
const computerCountP = document.getElementById("computerCount");
let playerCount = 0;
let computerCount = 0;
const choices = ["Rock", "Paper", "Scissors"];
let result = "";
function plagGame(playerchoice) {

    console.log(playerchoice);
    computerChoice = choices[Math.floor(Math.random() * 3)];

    console.log("Computer Choice:: " + computerChoice);
    playerDisplay.textContent = `Player : ${playerchoice}`;
    computerDisplay.textContent = `Computer : ${computerChoice}`;
    if (playerchoice == computerChoice) {
        result = "ITS TIE";
        resultDisplay.textContent = result;
        console.log(result);

    }

    else {
        switch (playerchoice) {

            case "Rock":
                result = computerChoice == "Scissors" ? "You Win" : "You Lose";
                resultDisplay.textContent = result;

                break;

            case "Scissors":
                result = computerChoice == "Paper" ? "You Win" : "You Lose";
                resultDisplay.textContent = result;

                break;

            case "Paper":
                result = computerChoice == "Rock" ? "You Win" : "You Lose";
                resultDisplay.textContent = result;

                break;

        }
    }



    resultDisplay.classList.remove("greenText", "redText");

    if (result == "You Win") {

        console.log("result 1:" + result);
        playerCount += 1;
        resultDisplay.classList.add("greenText");
        console.log(resultDisplay);

    }
    else if (result == "You Lose") {
        console.log("result 2:" + result);

        computerCount += 1;
        resultDisplay.classList.add("redText");
        console.log(resultDisplay);

    }

    console.log(playerCount);
    console.log(computerCount);

    playerCountP.textContent = `Player Count : ${playerCount}`;
    computerCountP.textContent = `Computer Count : ${computerCount}`;


}