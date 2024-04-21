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
    if (b === 0 && a === 0) {
        return 0;
    }
    return a / b;
}

function operate(operator, inputOne, inputTwo) {
    switch (operator) {
        case '+': 
            return addition(inputOne, inputTwo);
        case '-': 
            return subtract(inputOne, inputTwo);
        case '*':
            return multiply(inputOne, inputTwo);
        case '/':
            return divide(inputOne, inputTwo);
}
}

export { addition, subtract, multiply, divide, operate }