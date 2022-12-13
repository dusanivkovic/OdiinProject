// let playerOne = require('./getplayer');
// let computerTwo = require('./getcomputer');
// let play = require('./playround');
import  getPlayerChoice  from "./getplayer.js";
import getComputerChoice from "./getcomputer.js";
import playRound from "./playround.js";
let playerSelection = '';
let computerSelection = ''; 
let resultPlayer = document.getElementById('player-result');
let resultComputer = document.getElementById('computer-result');
let player = document.getElementById('player_choice');
function game() {

        // document.getElementById('player_choice').addEventListener('click', event => {
        //     playerSelection = event.target.innerText.toLowerCase();
        // });
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
        // console.log(playRound(playerSelection, computerSelection));
        console.log(playerSelection, computerSelection)
        return playerSelection, computerSelection;

    // if (play.playRound().winComputer > play.playRound().winPlayer) {
    //     return 'Win Computer';
    // }else if (play.playRound().winComputer < play.playRound().winPlayer) {
    //     return 'Win Player'
    // }else {
    //     return 'Equal'
    // }
}
player.addEventListener('click', event => {
    game();
    resultPlayer.innerText = `You: ${playerSelection}`;
    resultComputer.innerText = `Computer: ${computerSelection}`
});
// player.addEventListener('click', event => {resultPlayer.innerText = game()})
// let startGame = document.getElementById('start-game').addEventListener('click', event => {game()});

// console.log(game());


