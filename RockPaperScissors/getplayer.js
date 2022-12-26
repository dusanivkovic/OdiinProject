let playerSelection;
let tools = document.getElementById('player_choice');
function  getPlayerChoice() { 
    tools.addEventListener('click', event => {
        event.target.classList.toggle('player-choice');
    })
}
export default getPlayerChoice;


