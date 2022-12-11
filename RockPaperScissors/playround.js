
let winComputer = 0;
let winPlayer = 0;

function playRound(player, computer) {
    let result = '';
    if (player == 'rock') {
        if (computer == 'paper') {
            result = 'paper covers rock';
            winComputer++;
        }else if (computer == 'scissors') {
                result = 'rock breaks scissors';
                winPlayer++;
            }else {
                result = 'equal';
            }
    }else {
        if (player == 'scissors') {
            if (computer == 'paper') {
                result = 'scissors cuts paper';
                winPlayer++;
            }else if (computer == 'rock') {
                    result = 'rock breaks scissors';
                    winComputer++;
                }else {
                    result = 'equal'
                }
        }else {
            if (computer == 'scissors') {
                result = 'scissors cuts paper';
                winComputer++;
            }else if (computer == 'rock') {
                result = 'paper covers rock';
                winPlayer++;
            }else {
                result = 'equal';
            }
        }
    }
    return {result, winPlayer, winComputer};
}   
module.exports = {
    playRound,
    winComputer,
    winPlayer
};