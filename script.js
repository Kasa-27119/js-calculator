// define variables
// ge the display element and set operands to empty strings
const display = document.getElementById("display");
let currentOperand = "";
let previousOperand = "";
let operation = "";

// Helper functions

// update display:
function updateDisplay() {
    display.value = currentOperand;
}
// append the number o the current operand
function appendNumber(number) {
    currentOperand += number;
    updateDisplay();
}

// set chosen operand and reset the current
function chooseOperation(op) {
    previousOperand = currentOperand;
    currentOperand = "";
    operation = op;
}

// calculate
function calculate() {
    let result;
    switch (operation) {
        case "+":
            // what happens if the case is true
            result = parseFloat(previousOperand) + parseFloat(currentOperand);
            break;
        case "-":
            result = parseFloat(previousOperand) - parseFloat(currentOperand);
            break;
        case "*":
            result = parseFloat(previousOperand) * parseFloat(currentOperand);
            break;
        case "/":
            result = parseFloat(previousOperand) / parseFloat(currentOperand);
            break;
    }
    currentOperand = result.toString();
    updateDisplay();

}

// event listeners
// need to attach to each number button - run the append number function on each number button
document.querySelectorAll(".number").forEach(function(button) {
    button.addEventListener("click", function() {
        appendNumber(button.textContent);
    })

});

// operator - +,-,*,/
document.querySelectorAll(".operator").forEach(function(button) {
    button.addEventListener("click", function() {
        chooseOperation(button.textContent);
    });
});

// clear button
document.getElementById("clear").addEventListener("click", function() {
    currentOperand = "";
    previousOperand = "";
    operation = "";
    updateDisplay();
});

// decimal point
document.getElementById("decimal").addEventListener("click", function() {
    if (!currentOperand.includes(".")) {
        appendNumber(".");
    }
});

//calculate
document.getElementById("calculate").addEventListener("click", function() {
    calculate();
});