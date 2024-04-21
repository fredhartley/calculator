import { operate } from "./modules/calculator.js";

const numberButtons = document.querySelectorAll("button.calculator__number");
const operatorButtons = document.querySelectorAll("button.calculator__operator");
const clearButton = document.querySelector("button.calculator__clear");
const equalsButton = document.querySelector("button.calculator__equals");
const pointButton = document.querySelector('button.calculator__point');
const display = document.querySelector(".calculator__display");

let currentOperand1 = "";
let currentOperand2 = "";
let currentOperator = null;
let resetDisplay = false;

clearButton.addEventListener('click', clear);
equalsButton.addEventListener('click', evaluate);
pointButton.addEventListener('click', decimal);

// add eventlistener to every number button
numberButtons.forEach(function(button) {
    button.addEventListener('click', () => {
        display.textContent += button.textContent;
    })
    }
)

function clear() {
    display.textContent = '';
}

function evaluate() {

}

function decimal() {
    if ( !display.textContent.includes('.')) {
        display.textContent += '.';
    }
}


// add eventlistener to eevery operator button
// 



// events
// person presses a number (sometimes more than once if it longer than over 9)
// person presses a operator (maybe they press the wrong one initially and select another which resets the designated operator)
// person presses a number (sometimes more than once if it longer than over 9)
// two paths
// person either presses equals in which the result is shown on the display 
// or person another operator to continue sum

// lets declare functions that activate based on the input
