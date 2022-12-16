import getComputerChoice from "./getcomputer.js";
import playRound from "./playround.js";
import winPlayer from "./playround.js";
import winComputer from "./playround.js";
let playerSelection = '';
let computerSelection = ''; 
let resultPlayer = document.getElementById('player-result');
let resultComputer = document.getElementById('computer-result');
let player = document.getElementById('player_choice');
let startGame = document.getElementById('start');
function game() {
if (winComputer > winPlayer) {
    return 'Win Computer';
}else if (winComputer < winPlayer) {
    return 'Win Player'
}else {
    return 'Equal'
}
}

startGame.addEventListener('click', e => { 
    ;
});

player.addEventListener('click', event => {
    playerSelection = event.target.innerText.toLowerCase();
    resultPlayer.innerText = `You: ${playerSelection}`;
    computerSelection = getComputerChoice();
    resultComputer.innerText = `Computer: ${computerSelection}`;
    console.log(playerSelection, computerSelection)
    console.log(playRound(playerSelection, computerSelection));
});







let list = document.getElementsByClassName('player-tool');
[...list].forEach( (item) => {
    item.addEventListener('click', console.log('HI'))
})

// player.addEventListener('click', event => {resultPlayer.innerText = game()})
//startGame = document.getElementById('start-game').addEventListener('click', event => {game()});

// console.log(game());


