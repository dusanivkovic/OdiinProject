const calcSymbol = ['display', 'AC', '+/-', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0' , '.', '='];
const gridItem = document.querySelectorAll('.grid-item');
let i = 0;
gridItem.forEach(item => {
    switch (calcSymbol[i]) {
        case 'display': 
            item.setAttribute('id', 'display')
            break;
        case '%':
            item.setAttribute('id', 'percent');
            item.innerText = calcSymbol[i];
            break;
        case '=':
            item.setAttribute('id', 'equal');
            item.innerText = calcSymbol[i];
            break;
        case '-':
            item.setAttribute('id', 'minus');
            item.innerText = calcSymbol[i];
            break;
        case '+':
            item.setAttribute('id', 'plus');
            item.innerText = calcSymbol[i];
            break;
        case '*':
            item.setAttribute('id', 'multiplication');
            item.innerText = calcSymbol[i];
            break;
        case '/':
            item.setAttribute('id', 'divide');
            item.innerText = calcSymbol[i];
            break;
        default:
            item.setAttribute('id', calcSymbol[i]);
            item.innerText = calcSymbol[i];
    }
    i++;
})// Add id ans printout calculator
const display = document.querySelector('#display');
const result = display.querySelector('.showResult');
const aC = document.querySelector('#AC');
aC.addEventListener('click', () => {
    result.innerText = '';
    result.classList.remove('on'); 
    decimal.classList.remove('on');
    firstOperand = '';
    //secondOperand = '';
    operator = undefined;
    expr = '';
})
const sign = document.getElementById('+/-');
sign.addEventListener('click', () => {
    result.classList.toggle('on');
    if (result.matches('.on')) {
        result.textContent = `-${result.textContent}`;
    }else {
        result.textContent = result.textContent.slice(1, result.textContent.length);
    }
    firstOperand = result.textContent;
    // console.log(parseFloat(firstOperand) + 5)
})
const decimal = document.querySelector('.point');
decimal.addEventListener('click', () => {
    if (result.textContent == '') {
        showDecimal(0);
    }else if (!decimal.matches('.on')) {
        showDecimal(result.textContent);
    }
})
function showDecimal(para) {
    decimal.classList.add('on');
    result.textContent = `${para}.`;
}
const operand = document.querySelectorAll('.number, .operator');
let firstOperand = display.querySelector('.showResult').textContent, secondOperand = '', operator;
console.log(firstOperand);
const percent = document.querySelector('#percent');
percent.addEventListener('click', () => {
    result.innerText = parseFloat(result.innerText)/100;
})
operand.forEach(item => {
    item.addEventListener('click', () => {
        if (item.matches('.operator')) {
            decimal.classList.remove('on');
        }
        result.innerText += item.innerText;
        console.log(firstOperand, operator, secondOperand, result.innerText)
    })
})

const equal = document.querySelector('#equal');
let expr;
equal.addEventListener('click', () => {
    console.log(firstOperand, operator, secondOperand);
    if (secondOperand != '') {
        operation (firstOperand, operator, secondOperand);
        result.innerText = expr;
        // secondOperand = '';
        // operator = undefined;
    }
    console.log(firstOperand);
})

function operation (first, oper, second) {
    switch (oper) {
        case '+':
            expr = parseFloat(first) + parseFloat(second);
            break;
        case '-':
            expr = parseFloat(first) - parseFloat(second);
            break;
        case '*':
            expr = parseFloat(first) * parseFloat(second);
            break;
        case '/':
            expr = parseFloat(first) / parseFloat(second);
            break;
    }
    firstOperand = expr;
    //secondOperand = '';
    return expr, firstOperand;
}

