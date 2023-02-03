const calcSymbol = ['display', 'AC', '+/-', '%', '/ ', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0' , '.', '='];
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
const span = document.createElement('span');
span.classList.add('numbers');
const negativeSign = display.querySelector('#show-negative');
const aC = document.querySelector('#AC');
aC.addEventListener('click', () => {
    document.querySelector('.numbers').innerText = '';
    negativeSign.classList.remove('on'); 
    negativeSign.textContent = '';
})
const sign = document.getElementById('+/-');
sign.addEventListener('click', () => {
    negativeSign.classList.toggle('on');
    if (negativeSign.matches('.on')) {
        negativeSign.textContent = '-';
    }else {
        negativeSign.textContent = '';
    }
})
const operand = document.querySelectorAll('.number, .operator');
operand.forEach(item => {
    item.addEventListener('click', () => {
        span.innerHTML += item.innerHTML;
        display.appendChild(span);
    })
})
const percent = document.querySelector('#percent');
percent.addEventListener('click', () => {
    display.querySelector('.numbers').innerText = parseFloat(display.querySelector('.numbers').innerText)/100;
})
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const divide = document.querySelector('#divide');
const multiplication = document.querySelector('#multiplication');
const equal = document.querySelector('#equal');
equal.addEventListener('click', () => {
    const expr = display.textContent;
    console.log(expr);
    for (let j in expr) {
        console.log(expr[j]);
    }
})

