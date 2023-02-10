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
    decimal.classList.add('on');// Default value
    aritmeticSign.forEach(item => {item.classList.remove('on');})
    firstOperand = '';
    secondOperand = '';
    operator = '';
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
})
const decimal = document.querySelector('.point');
decimal.classList.add('on');// Default value 
const operand = document.querySelectorAll('.number, .point');
const aritmeticSign = document.querySelectorAll('.operator');
let firstOperand = '', secondOperand = '', operator;
console.log(firstOperand);
const percent = document.querySelector('#percent');
percent.addEventListener('click', () => {
    result.innerText = parseFloat(result.innerText)/100;
})
aritmeticSign.forEach(item => {
    item.addEventListener('click', () => {
        if (firstOperand == '') {
            firstOperand += result.textContent;
        }else {
            //secondOperand += '-';
            operation(firstOperand, operator, secondOperand);
        }
        if (item.matches('.on')) {
            result.textContent += item.textContent;
        }
        removeAritmeticSign();
        decimal.classList.add('on');
        operator = item.textContent;
    })
})

operand.forEach(item => {
    item.addEventListener('click', () => {
        if (item.matches('.on') && item.matches('.point')) {
            if (firstOperand == '') {
                result.textContent += `.`;
            }else {
                result.textContent += '.';
                secondOperand += '.';
            }
            item.classList.remove('on');
        }else if (!item.matches('.point')) {
            if (firstOperand == '') {
                result.textContent += item.textContent;
            }else {
                result.textContent += item.textContent;
                secondOperand += item.textContent;
            }
        }
        aritmeticSign.forEach(item => {item.classList.add('on')})
    })
})

const equal = document.querySelector('#equal');
let expr;
equal.addEventListener('click', () => {
    console.log(firstOperand, operator, secondOperand);
    if (secondOperand != '') {
        operation (firstOperand, operator, secondOperand);
        result.innerText = expr;
        //secondOperand = '';
        operator = '';
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
    secondOperand = '';
    return expr, firstOperand, second;
}
function removeAritmeticSign() {
        for (let i = 0; i < aritmeticSign.length; i++) {
        aritmeticSign[i].classList.remove('on');
    }
}

