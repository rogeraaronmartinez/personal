let num1 = ''
let num2 = ''
let currentOperation = null
let resetScreen = false

const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const equalsButton = document.getElementById('equalsButton')
const clearButton = document.getElementById('clearButton')
const previousOperationScreen = document.getElementById('previousOperationScreen')
const currentOperationScreen = document.getElementById('currentOperationScreen')

numberButtons.forEach((button) =>
    button.addEventListener('click', () => populateDisplay(button.textContent))
)

operatorButtons.forEach((button) =>
    button.addEventListener('click', () => setOperation(button.textContent))
)

clearButton.addEventListener('click', () => clearScreen())
equalsButton.addEventListener('click', () => operate())

function populateDisplay(number) {   
    currentOperationScreen.textContent += number
}

function clearScreen() {
    previousOperationScreen.textContent = ''
    currentOperationScreen.textContent = ''
    num1 = ''
    num2 = ''
    currentOperation = null
}

function setOperation(operand) {
    num1 = currentOperationScreen.textContent
    currentOperation = operand
    previousOperationScreen.textContent = num1 + currentOperation
    currentOperationScreen.textContent = ''
}

function operate() {
    num2 = currentOperationScreen.textContent
    if (currentOperation == "+") {
        add(num1, num2);
    }else if (currentOperation == "-") {
        subtract(num1, num2);
    }else if (currentOperation == "*") {
        multiply(num1, num2);
    }else if (currentOperation == "/") {
        divide(num1, num2);
    }
}

function add(in1, in2) {
    let answer = parseInt(in1) + parseInt(in2)
    currentOperationScreen.textContent = ''
    previousOperationScreen.textContent = num1 + currentOperation + num2
    populateDisplay(answer);
}

function subtract(in1, in2) {
    let answer = parseInt(in1) - parseInt(in2)
    currentOperationScreen.textContent = ''
    previousOperationScreen.textContent = num1 + currentOperation + num2
    populateDisplay(answer);
}

function multiply(in1, in2) {
    let answer = parseInt(in1) * parseInt(in2)
    currentOperationScreen.textContent = ''
    previousOperationScreen.textContent = num1 + currentOperation + num2
    populateDisplay(answer);
}

function divide(in1, in2) {
    let answer = Math.round((parseInt(in1) / parseInt(in2)) *1000) /1000
    currentOperationScreen.textContent = ''
    previousOperationScreen.textContent = num1 + currentOperation + num2
    populateDisplay(answer);
}

