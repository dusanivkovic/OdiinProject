// let playerOne = require('./getplayer');
// let computerTwo = require('./getcomputer');
// let play = require('./playround');
import  getPlayerChoice  from "./getplayer.js";
import getComputerChoice from "./getcomputer.js";
import playRound from "./playround.js";
let playerSelection = '';
let computerSelection = ''; 
let resultPlayer = document.getElementById('player-result');
function game() {

        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
        // console.log(playerSelection, computerSelection);
        // console.log(playRound(playerSelection, computerSelection));
        console.log(playerSelection, computerSelection)
        return playerSelection;

    // if (play.playRound().winComputer > play.playRound().winPlayer) {
    //     return 'Win Computer';
    // }else if (play.playRound().winComputer < play.playRound().winPlayer) {
    //     return 'Win Player'
    // }else {
    //     return 'Equal'
    // }
}
let startGame = document.getElementById('start').addEventListener('click', game());

// console.log(game());


