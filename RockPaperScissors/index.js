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
    computerSelection = getComputerChoice();
    let x = playRound(playerSelection, computerSelection);
    resultPlayer.innerHTML = `You: ${playerSelection}</br> ${x.winPlayer}`;
    resultComputer.innerHTML = `Computer: ${computerSelection}</br> ${x.winComputer}`;
    document.getElementById('result-game').innerText = x.result;
    console.log(playRound(x.winComputer));
    let listComputer = document.querySelectorAll('.computer-choice');
    // console.log(listComputer[0])
    listComputer.forEach( (item) => {
        item.style.color = 'red';
        console.log(item.style)
    })

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


let listPlayer = document.getElementsByClassName('player-tool');
[...listPlayer].forEach( (item) => {
    item.addEventListener('click', (event) => {
        game(event);
    })
})

// player.addEventListener('click', event => {resultPlayer.innerText = game()})
//startGame = document.getElementById('start-game').addEventListener('click', event => {game()});

// console.log(game());


