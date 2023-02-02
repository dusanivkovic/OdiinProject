const calcSymbol = ['display', 'AC', '+/-', '%', '-', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0' , '.', '='];
const gridItem = document.querySelectorAll('.grid-item');
let i = 0;
gridItem.forEach(item => {
    if (calcSymbol[i] != 'display') {
        item.innerText = calcSymbol[i];
    }
    item.setAttribute('id', calcSymbol[i]);
    i++;
})
const clearDisplay = document.querySelector('#AC');
const display = document.querySelector('#display');
clearDisplay.addEventListener('click', () => {
    display.innerHTML = '';
    const span = document.createElement('span');
    span.classList.add('negative');
    // let textNode = span.createTextNode("-");
    // span(textNode);
    display.appendChild(span);
})
const sign = document.getElementById('+/-');
sign.addEventListener('click', () => {
    const negativeSign = display.querySelector('span');
    if (negativeSign.matches('.negative')) {
        negativeSign.classList.remove('negative');
    } else {
        negativeSign.classList.add('negative');
    }
})
const number = document.querySelectorAll('.number');
number.forEach(item => {
    item.addEventListener('click', () => {
        display.innerHTML += '<span>' + item.innerHTML + '</span>';
    })
})


