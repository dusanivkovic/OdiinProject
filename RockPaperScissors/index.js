const choice = ['rock', 'paper', 'scissors'];
let winComputer = 0;
let winPlayer = 0;
function getComputerChoice() {
    let i = Math.floor(Math.random() * 3);
    return choice[i];
}
function getPlayerChoice() { 
    return choice[parseInt(prompt('enter number '))]; 
}
function playRound(player, computer) {
    let result = '';
    if (player == 'rock') {
        if (computer == 'paper') {
            result = 'paper covers rock';
            winComputer++;
        }else if (computer == 'scissors') {
                result = 'rock breaks scissors';
                winPlayer++;
            }else {
                result = 'equal';
            }
    }else {
        if (player == 'scissors') {
            if (computer == 'paper') {
                result = 'scissors cuts paper';
                winPlayer++;
            }else if (computer == 'rock') {
                    result = 'rock breaks scissors';
                    winComputer++;
                }else {
                    result = 'equal'
                }
        }else {
            if (computer == 'scissors') {
                result = 'scissors cuts paper';
                winComputer++;
            }else if (computer == 'rock') {
                result = 'paper covers rock';
                winPlayer++;
            }else {
                result = 'equal';
            }
        }
    }
    return {result, winComputer, winPlayer};
}   
  let playerSelection;
  let computerSelection;
//   console.log(playRound(playerSelection, computerSelection));

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
        console.log(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
    if (winComputer > winPlayer) {
        return 'Win Computer';
    }else if (winComputer < winPlayer) {
        return 'Win Player'
    }else {
        return 'Equal'
    }
}
console.log(game());