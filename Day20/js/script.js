const rangeFrom = document.getElementById("rangeFrom");
const rangeTo = document.getElementById("rangeTo");
const addOperation = document.getElementById("add_operation");
const subOperation = document.getElementById("sub_operation");
const mulOperation = document.getElementById("mul_operation");
const divOperation = document.getElementById("div_operation");
const numQuestionsInput = document.getElementById("numQuestions");

const startQuestionsButton = document.getElementById("startQuestions");
const checkAnswerButton = document.getElementById("checkAnswer");
const nextProblemButton = document.getElementById("nextProblem");
const restartButton = document.getElementById("restart");

const num1Display = document.getElementById("num1");
const num2Display = document.getElementById("num2");
const operationSymbol = document.getElementById("operationSymbol");
const userAnswer = document.getElementById("userAnswer");
const resultDisplay = document.getElementById("result");
const currentQuestionDisplay = document.getElementById("currentQuestion");
const totalQuestionsDisplay = document.getElementById("totalQuestions");
const scoreDisplay = document.getElementById("score");

const settingsContainer = document.getElementById("settings");
const questionaryContainer = document.getElementById("questionary");
const summaryContainer = document.getElementById("summary");

const resultChart = document.getElementById("resultChart").getContext("2d");

let num1, num2, correctAnswer, operation, currentQuestion = 0, correctCount = 0;
let startTime, endTime, answers = [];

startQuestionsButton.addEventListener('click', () => {
    const rangeFromVal = parseInt(rangeFrom.value);
    const rangeToVal = parseInt(rangeTo.value);
    const numQuestions = parseInt(numQuestionsInput.value);

    if (isNaN(rangeFromVal) || isNaN(rangeToVal) || rangeFromVal >= rangeToVal || isNaN(numQuestions) || numQuestions <= 0) {
        alert('Please enter valid settings.');
        return;
    }

    currentQuestion = 0;
    correctCount = 0;
    answers = [];
    totalQuestionsDisplay.textContent = numQuestions;

    settingsContainer.hidden = true;
    questionaryContainer.hidden = false;

    startTime = new Date();
    generateProblem(rangeFromVal, rangeToVal);
});

function generateProblem(rangeFrom, rangeTo) {
    const operations = [];
    if (addOperation.checked) operations.push('+');
    if (subOperation.checked) operations.push('-');
    if (mulOperation.checked) operations.push('*');
    if (divOperation.checked) operations.push('/');

    if (operations.length === 0) {
        alert('Please select at least one operation.');
        settingsContainer.hidden = false;
        questionaryContainer.hidden = true;
        return;
    }

    operation = operations[Math.floor(Math.random() * operations.length)];
    num1 = Math.floor(Math.random() * (rangeTo - rangeFrom + 1)) + rangeFrom;
    num2 = Math.floor(Math.random() * (rangeTo - rangeFrom + 1)) + rangeFrom;

    if (operation === '/' && num2 === 0) num2 = 1;

    operationSymbol.textContent = operation;
    num1Display.textContent = num1;
    num2Display.textContent = num2;

    correctAnswer = eval(`${num1} ${operation} ${num2}`).toFixed(2);
}

checkAnswerButton.addEventListener('click', () => {
    const userAns = parseFloat(userAnswer.value).toFixed(2);
    const isCorrect = userAns == correctAnswer;

    resultDisplay.textContent = isCorrect ? 'Correct!' : `Wrong! Correct answer: ${correctAnswer}`;
    if (isCorrect) correctCount++;
    answers.push(isCorrect);
});

nextProblemButton.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < totalQuestionsDisplay.textContent) {
        currentQuestionDisplay.textContent = currentQuestion + 1;
        generateProblem(parseInt(rangeFrom.value), parseInt(rangeTo.value));
        userAnswer.value = '';
        resultDisplay.textContent = '';
    } else {
        endTime = new Date();
        questionaryContainer.hidden = true;
        summaryContainer.hidden = false;

        displaySummary();
    }
});

restartButton.addEventListener('click', () => {
    summaryContainer.hidden = true;
    settingsContainer.hidden = false;
});

function displaySummary() {
    const totalTime = ((endTime - startTime) / 1000).toFixed(2);
    scoreDisplay.textContent = `You got ${correctCount} out of ${totalQuestionsDisplay.textContent} correct!`;
    document.getElementById('timeTaken').textContent = `Total Time: ${totalTime}s`;

    new Chart(resultChart, {
        type: 'bar',
        data: {
            labels: answers.map((_, i) => `Q${i + 1}`),
            datasets: [{
                label: 'Correct (1) / Incorrect (0)',
                data: answers.map(a => a ? 1 : 0),
                backgroundColor: answers.map(a => a ? 'rgba(75, 192, 192, 0.2)' : 'rgba(255, 99, 132, 0.2)'),
                borderColor: answers.map(a => a ? 'rgba(75, 192, 192, 1)' : 'rgba(255, 99, 132, 1)'),
                borderWidth: 1,
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 1,
                }
            }
        }
    });
}
