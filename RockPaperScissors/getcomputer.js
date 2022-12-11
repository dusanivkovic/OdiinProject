const choice = ['rock', 'paper', 'scissors'];
let computer;
function getComputerChoice() {
    let i = Math.floor(Math.random() * 3);
    computer =  choice[i];
    return computer;
}
module.exports = {getComputerChoice, computer};
