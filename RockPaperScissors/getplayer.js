let player;
let tools = document.getElementById('player_choice');

function  getPlayerChoice() { 
    // player = 'rock';
    tools.addEventListener('click', event => {
        player = event.target.innerText.toLowerCase();
        console.log(player);
    })
    return player;
}
export default getPlayerChoice;
// module.exports = { getPlayerChoice, player }

