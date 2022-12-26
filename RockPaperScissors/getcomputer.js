const choice = ['rock', 'paper', 'scissors'];
let computerSelection;
function getComputerChoice() {
    let i = Math.floor(Math.random() * 3);
    computerSelection =  choice[i];
    let listComputer = document.querySelectorAll('.computer-choice');
    listComputer.forEach( (item) => {
        if (computerSelection == item.innerText.toLowerCase()) {
            item.style.color = 'var(--main-color)'
        } else {
            item.style.color = 'var(--text-color-second)'
        }
    })
    return computerSelection;
}
export default getComputerChoice;

