// สร้างฟังก์ชันสุ่มเลขจำนวนเต็มระหว่าง min ถึง max
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// สร้างฟังก์ชันสุ่มดำเนินการ (+, -, *, /)
function getRandomOperator() {
    const operators = ['+', '-', '*', '/'];
    const randomIndex = getRandomInt(0, operators.length - 1);
    return operators[randomIndex];
}

// สร้างฟังก์ชันสร้างข้อคำถาม
function generateQuestion() {
    const num1 = getRandomInt(1, 10);
    const num2 = getRandomInt(1, 10);
    const operator = getRandomOperator();
    const problem = `${num1} ${operator} ${num2}`;
    const answer = eval(problem); // คำนวณคำตอบ

    return {
        problem: problem,
        answer: answer
    };
}

const problemElement = document.getElementById('problem');
const answerInput = document.getElementById('answer');
const resultElement = document.getElementById('result');
const submitButton = document.getElementById('submit');

// เริ่มเกม
let score = 0;
let currentQuestion;

function startGame() {
    score = 0;
    nextQuestion();
}

function nextQuestion() {
    currentQuestion = generateQuestion();
    problemElement.textContent = `Question: ${currentQuestion.problem}`;
    answerInput.value = '';
    resultElement.textContent = '';
}

function checkAnswer() {
    const userAnswer = parseFloat(answerInput.value);

    if (userAnswer === currentQuestion.answer) {
        resultElement.textContent = 'Correct!';
        score++;
    } else {
        resultElement.textContent = 'Wrong!';
    }

    setTimeout(() => {
        nextQuestion();
    }, 1000);
}

submitButton.addEventListener('click', checkAnswer);

// เริ่มเกมคณิตศาสตร์
startGame();
