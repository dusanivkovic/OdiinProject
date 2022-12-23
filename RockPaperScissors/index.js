import getComputerChoice from "./getcomputer.js";
import playRound from "./playround.js";
import winPlayer from "./playround.js";
import winComputer from "./playround.js";
let playerSelection = '';
let computerSelection = ''; 
let resultPlayer = document.getElementById('player-result');
let resultComputer = document.getElementById('computer-result');
let player;
let startGame = document.getElementById('start');
function game(e) {
    playerSelection = e.target.innerText.toLowerCase();
    resultPlayer.innerText = `You: ${playerSelection}`;
    computerSelection = getComputerChoice();
    resultComputer.innerHTML = `Computer: ${computerSelection}</br> ${playRound(playerSelection, computerSelection).winComputer}`;
    // console.log(playerSelection, computerSelection)
    document.getElementById('result-game').innerText = playRound(playerSelection, computerSelection).result;
    console.log(playRound(playerSelection, computerSelection).winComputer);
    if (winComputer > winPlayer) {
        return 'Win Computer';
    }else if (winComputer < winPlayer) {
        return 'Win Player'
    }else {
        return 'Equal'
    }
}

// startGame.addEventListener('click', e => { 
//     ;
// });


let list = document.getElementsByClassName('player-tool');
[...list].forEach( (item) => {
    item.addEventListener('click', (event) => {
        game(event);
    })
})

// player.addEventListener('click', event => {resultPlayer.innerText = game()})
//startGame = document.getElementById('start-game').addEventListener('click', event => {game()});

// console.log(game());


