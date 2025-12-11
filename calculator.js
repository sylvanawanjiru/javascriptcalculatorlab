// calculator.js

// 1) Create an empty array to store calculation history
const calculationHistory = [];

// 2) Function to add a calculation to history
function saveToHistory(number1, number2, operator, result) {
    const entry = {
        number1: number1,
        number2: number2,
        operator: operator,
        result: result
    };

    calculationHistory.push(entry);
}

// 3) Basic arithmetic functions
function add(a, b) {
    const result = a + b;
    saveToHistory(a, b, "+", result);
    console.log("Result:", result);
}

function subtract(a, b) {
    const result = a - b;
    saveToHistory(a, b, "-", result);
    console.log("Result:", result);
}

function multiply(a, b) {
    const result = a * b;
    saveToHistory(a, b, "*", result);
    console.log("Result:", result);
}

function divide(a, b) {
    if (b === 0) {
        console.log("Error: Cannot divide by zero.");
        return;
    }
    const result = a / b;
    saveToHistory(a, b, "/", result);
    console.log("Result:", result);
}

// 4) Display the history
function showHistory() {
    if (calculationHistory.length === 0) {
        console.log("No calculations yet.");
        return;
    }

    console.log("=== Calculation History ===");
    calculationHistory.forEach((entry, index) => {
        console.log(
            (index + 1) + ". " +
            entry.number1 + " " +
            entry.operator + " " +
            entry.number2 + " = " +
            entry.result
        );
    });
    console.log("===========================");
}

// 5) Test the calculator
add(10, 5);
subtract(20, 8);
multiply(4, 3);
divide(30, 5);

// show history
showHistory();
