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

document.getElementById('startQuestions').addEventListener('click', function() {
    const rangeFrom = parseInt(document.getElementById('rangeFrom').value);
    const rangeTo = parseInt(document.getElementById('rangeTo').value);
    if (isNaN(rangeFrom) || isNaN(rangeTo) || rangeFrom >= rangeTo) {
        alert('Please enter valid range values.');
        return;
    }
    document.getElementById('settings').hidden = true;
    document.getElementById('questionary').hidden = false;
    generateProblem(rangeFrom, rangeTo);
});

function generateProblem(rangeFrom, rangeTo) {
    const num1 = Math.floor(Math.random() * (rangeTo - rangeFrom + 1)) + rangeFrom;
    const num2 = Math.floor(Math.random() * (rangeTo - rangeFrom + 1)) + rangeFrom;
    document.getElementById('num1').textContent = num1;
    document.getElementById('num2').textContent = num2;
}
