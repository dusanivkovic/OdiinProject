let playerOne = require('./getplayer');
let computerTwo = require('./getcomputer');
let play = require('./playround');
let playerSelection = '';
let computerSelection = ''; 
// console.log(playerSelection, computerSelection)
// console.log(play.playRound(playerSelection, computerSelection));

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = playerOne.getPlayerChoice();
        computerSelection = computerTwo.getComputerChoice();
        console.log(playerSelection, computerSelection);
        console.log(play.playRound(playerSelection, computerSelection));
    }
    if (play.playRound().winComputer > play.playRound().winPlayer) {
        return 'Win Computer';
    }else if (play.playRound().winComputer < play.playRound().winPlayer) {
        return 'Win Player'
    }else {
        return 'Equal'
    }
}
console.log(game());


