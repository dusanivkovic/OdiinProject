let playerSelection;
let tools = document.getElementById('player_choice');

function  getPlayerChoice() { 
    // player = 'rock';
    tools.addEventListener('click', event => {
        playerSelection = event.target.innerText.toLowerCase();
    })
    return playerSelection;
}
export default getPlayerChoice;
// module.exports = { getPlayerChoice, player }

