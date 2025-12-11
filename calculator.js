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

// 3) Function to validate inputs
function checkNumbers(a, b) {
    const num1 = Number(a);
    const num2 = Number(b);

    if (isNaN(num1) || isNaN(num2)) {
        console.log("Error: Both inputs must be valid numbers!");
        return false;
    }
    return [num1, num2];
}

// 4) Basic arithmetic functions with validation
function add(a, b) {
    const numbers = checkNumbers(a, b);
    if (!numbers) return;

    const result = numbers[0] + numbers[1];
    saveToHistory(numbers[0], numbers[1], "+", result);
    console.log("Result:", result);
}

function subtract(a, b) {
    const numbers = checkNumbers(a, b);
    if (!numbers) return;

    const result = numbers[0] - numbers[1];
    saveToHistory(numbers[0], numbers[1], "-", result);
    console.log("Result:", result);
}

function multiply(a, b) {
    const numbers = checkNumbers(a, b);
    if (!numbers) return;

    const result = numbers[0] * numbers[1];
    saveToHistory(numbers[0], numbers[1], "*", result);
    console.log("Result:", result);
}

function divide(a, b) {
    const numbers = checkNumbers(a, b);
    if (!numbers) return;

    if (numbers[1] === 0) {
        console.log("Error: Cannot divide by zero!");
        return;
    }

    const result = numbers[0] / numbers[1];
    saveToHistory(numbers[0], numbers[1], "/", result);
    console.log("Result:", result);
}

// 5) Display the calculation history
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

// 6) Test the calculator
add(10, 5);
subtract(20, 8);
multiply(4, 3);
divide(30, 5);
divide(5, 0);   // test divide by zero
add("abc", 3);  // test invalid input

// show all history
showHistory();

