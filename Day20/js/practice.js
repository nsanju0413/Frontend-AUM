// Select elements from the DOM
const rangeFrom = document.getElementById("rangeFrom");
const rangeTo = document.getElementById("rangeTo");
const addOperation = document.getElementById("add_operation");
const subOperation = document.getElementById("sub_operation");
const mulOperation = document.getElementById("mul_operation");
const divOperation = document.getElementById("div_operation");

const startQuestionsButton = document.getElementById("startQuestions");
const checkAnswerButton = document.getElementById("checkAnswer");
const nextProblemButton = document.getElementById("nextProblem");

const num1Display = document.getElementById("num1");
const num2Display = document.getElementById("num2");
const userAnswer = document.getElementById("userAnswer");
const resultDisplay = document.getElementById("result");

const settingsContainer = document.getElementById("settings");
const questionaryContainer = document.getElementById("questionary");

let num1, num2, correctAnswer, operation;

// Function to start the quiz
startQuestionsButton.addEventListener("click", () => {
    const rangeStart = parseInt(rangeFrom.value) || -100;
    const rangeEnd = parseInt(rangeTo.value) || 100;

    if (!addOperation.checked && !subOperation.checked && !mulOperation.checked && !divOperation.checked) {
        alert("Please select at least one operation.");
        return;
    }

    settingsContainer.hidden = true;
    questionaryContainer.hidden = false;
    generateProblem(rangeStart, rangeEnd);
});

// Function to generate a new problem
function generateProblem(rangeStart, rangeEnd) {
    num1 = Math.floor(Math.random() * (rangeEnd - rangeStart + 1)) + rangeStart;
    num2 = Math.floor(Math.random() * (rangeEnd - rangeStart + 1)) + rangeStart;

    const operations = [];
    if (addOperation.checked) operations.push("+");
    if (subOperation.checked) operations.push("-");
    if (mulOperation.checked) operations.push("*");
    if (divOperation.checked) operations.push("/");

    operation = operations[Math.floor(Math.random() * operations.length)];

    // Calculate the correct answer based on the operation
    switch (operation) {
        case "+":
            correctAnswer = num1 + num2;
            break;
        case "-":
            correctAnswer = num1 - num2;
            break;
        case "*":
            correctAnswer = num1 * num2;
            break;
        case "/":
            // To avoid division by zero and ensure integer division
            if (num2 === 0) num2 = 1;
            correctAnswer = Math.floor(num1 / num2);
            break;
    }

    // Display the problem
    num1Display.textContent = num1;
    num2Display.textContent = num2;
    userAnswer.value = "";
    resultDisplay.textContent = "";
    num1Display.nextSibling.textContent = ` ${operation} `;
}

// Function to check the user's answer
checkAnswerButton.addEventListener("click", () => {
    const userResponse = parseInt(userAnswer.value);
    if (userResponse === correctAnswer) {
        resultDisplay.textContent = "Success";
        resultDisplay.style.color = "green";
    } else {
        resultDisplay.textContent = "Fail";
        resultDisplay.style.color = "red";
    }
});

// Function to generate the next problem
nextProblemButton.addEventListener("click", () => {
    const rangeStart = parseInt(rangeFrom.value) || -100;
    const rangeEnd = parseInt(rangeTo.value) || 100;
    generateProblem(rangeStart, rangeEnd);
});
