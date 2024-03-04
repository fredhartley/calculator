function addition(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let inputOne;
let inputTwo;
let operator;

function operate(operator, numOne, numTwo) {
    if (operator === '+') {
        addition(inputOne, inputTwo)
    }
    if (operator === '-') {
        subtract(inputTwo, inputTwo)
    } 
    if (operator === '*') {
        multiply(inputOne, inputTwo)
    } 
    if (operator === '/') {
        divide(a, b)
    }
}