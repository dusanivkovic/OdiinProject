// let playerOne = require('./getplayer');
// let computerTwo = require('./getcomputer');
// let play = require('./playround');
import  getPlayerChoice  from "./getplayer.js";
import getComputerChoice from "./getcomputer.js";
import playRound from "./playround.js";
import winPlayer from "./playround.js";
import winComputer from "./playround.js";
let playerSelection = '';
let computerSelection = ''; 
let resultPlayer = document.getElementById('player-result');
let resultComputer = document.getElementById('computer-result');
let player = document.getElementById('player_choice');
function game(p) {
        p.addEventListener('click', event => {
            playerSelection = event.target.innerText.toLowerCase();
            resultPlayer.innerText = `You: ${playerSelection}`;
            computerSelection = getComputerChoice();
            resultComputer.innerText = `Computer: ${computerSelection}`;
        });;

        console.log(playRound(playerSelection, computerSelection));
        // console.log(playerSelection, computerSelection)
        return playerSelection, computerSelection;

    // if (winComputer > winPlayer) {
    //     return 'Win Computer';
    // }else if (winComputer < winPlayer) {
    //     return 'Win Player'
    // }else {
    //     return 'Equal'
    // }
}
player.addEventListener('click', event => {
    game(player);
    // console.log(playerSelection, computerSelection)
    // console.log(playRound(playerSelection, computerSelection));
});

let list = document.getElementsByClassName('player-tool');
[...list].forEach( (item) => {
    item.addEventListener('click', console.log('HI'))
})

// player.addEventListener('click', event => {resultPlayer.innerText = game()})
// let startGame = document.getElementById('start-game').addEventListener('click', event => {game()});

// console.log(game());


