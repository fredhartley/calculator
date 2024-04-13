import { operate } from "./modules/calculator.js";

const calculatorNumbers = document.querySelectorAll("button.calculator__number");
const calculatorDisplay = document.querySelector(".calculator__display");

calculatorNumbers.forEach(function(button) {
    button.addEventListener('click', function(event) {
        let numberSelected = event.target.textContent;
        calculatorDisplay.textContent = numberSelected;
    })
})
addEventListener('click', function(event) {

})

try {
    const result = operate('+', 5, 3);
    console.log(result); // Output will be 8
} catch (error) {
    console.error(error);
}