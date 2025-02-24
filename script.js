// script.js

let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(op) {
    if (currentInput === '') return; // Prevent operator before number input
    if (previousInput !== '') {
        calculateResult(); // Calculate if there's an operator pending
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
    display.value = previousInput + operator;
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    display.value = '';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}

function calculateResult() {
    if (previousInput === '' || currentInput === '') return;
    
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current !== 0) {
                result = prev / current;
            } else {
                alert('Error: Division by zero');
                clearDisplay();
                return;
            }
            break;
        default:
            return;
    }

    display.value = result;
    previousInput = result;
    currentInput = '';
    operator = '';
}
