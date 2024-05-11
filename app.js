import { operate } from "./modules/calculator.js";

const numberButtons = document.querySelectorAll("button.calculator__number");
const operatorButtons = document.querySelectorAll(
  "button.calculator__operator"
);
const clearButton = document.querySelector("button.calculator__clear");
const equalsButton = document.querySelector("button.calculator__equals");
const pointButton = document.querySelector("button.calculator__point");
const display = document.querySelector(".display");

let currentOperand1 = "";
let currentOperand2 = "";
let currentOperator = null;

clearButton.addEventListener("click", clear);
equalsButton.addEventListener("click", evaluate);
pointButton.addEventListener("click", () => decimal(pointButton));

numberButtons.forEach(function (button) {
  button.addEventListener("click", () => numberButtonLogic(button));
});

operatorButtons.forEach(function (button) {
  button.addEventListener("click", () => operatorButtonLogic(button));
});

function numberButtonLogic(button) {
  // currentOperand1 has value, then add to currentOperand2
  if (currentOperand1.length > 0 && currentOperator !== null) {
    currentOperand2 += button.textContent;
    display.textContent = currentOperand2;
    console.log(`currentOperand2 is: ${currentOperand2}`);
    // if currentOperand1 has no value, then add to currentOperand1
  } else {
    currentOperand1 += button.textContent;
    display.textContent = currentOperand1;
    console.log(`currentOperand1 is: ${currentOperand1}`);
  }
}

function operatorButtonLogic(button) {
  // if both currentOperand1 and currentOperand2 have a value and operator is pressed, evaluate the result first
  if (currentOperand1.length > 0 && currentOperand2.length > 0) {
    evaluate();
  } else {
    currentOperator = button.textContent;
    console.log(`currentOperator is: ${currentOperator}`);
  }
}

function clear() {
  // resets all variables
  display.textContent = "";
  currentOperand1 = "";
  currentOperand2 = "";
  currentOperator = null;
  console.log(`currentOperand1 is: ${currentOperand1}`);
  console.log(`currentOperand2 is: ${currentOperand2}`);
}

function evaluate() {
  // converts from string to floating point
  const parsedOperand1 = parseFloat(currentOperand1);
  let parsedOperand2 = parseFloat(currentOperand2);

  // accounts for multiple operator clicks
  if (isNaN(parsedOperand2)) {
    parsedOperand2 = parsedOperand1;
  }

  // sets currentOperand1 to the result and frees up currentOperand2
  currentOperand1 = operate(
    currentOperator,
    parsedOperand1,
    parsedOperand2
  ).toString();
  display.textContent = currentOperand1;
  currentOperand2 = "";
}

function decimal(button) {
  // add to currentoperand1
  if (
    !currentOperand1.includes(".") &&
    currentOperand1.length > 0 &&
    currentOperand2 === ""
  ) {
    currentOperand1 += button.textContent;
    display.textContent = currentOperand1;
    console.log(`currentOperand1 is: ${currentOperand1}`);
  } else if (
    !currentOperand2.includes(".") &&
    currentOperand2.length > 0 &&
    currentOperand1.length > 0
  ) {
    currentOperand2 += button.textContent;
    display.textContent = currentOperand2;
    console.log(`currentOperand2 is: ${currentOperand2}`);
  }
}
