const calcSymbol = ['display', 'AC', '+/-', '%', '-', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0' , '.', '='];
const gridItem = document.querySelectorAll('.grid-item');
let i = 0;
gridItem.forEach(item => {
    if (calcSymbol[i] != 'display') {
        item.innerText = calcSymbol[i];
    }
    if (calcSymbol[i] != '%') {
        item.setAttribute('id', calcSymbol[i]);;
    }else {
        item.setAttribute('id', 'percent');
    }
    i++;
})
const clearDisplay = document.querySelector('#AC');
const display = document.querySelector('#display');
const span = document.createElement('span');
span.classList.add('numbers')
const negativeSign = display.querySelector('#show-negative');
clearDisplay.addEventListener('click', () => {
    document.querySelector('.numbers').innerText = '';
    negativeSign.classList.add('negative'); 
})
const sign = document.getElementById('+/-');
sign.addEventListener('click', () => {
    if (negativeSign.matches('.negative')) {
        negativeSign.classList.remove('negative');
    }else {
        negativeSign.classList.add('negative');
    }
})
const number = document.querySelectorAll('.number');
number.forEach(item => {
    item.addEventListener('click', () => {
        span.innerHTML += item.innerHTML;
        display.appendChild(span);
    })
})
const percent = document.querySelector('#percent');
percent.addEventListener('click', () => {
    display.querySelector('.numbers').innerText = parseFloat(display.querySelector('.numbers').innerText)/100;
})

