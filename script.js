let quizData = [];

let currentIndex = 0;
let score = 0;

// INPUTS
const questionInput = document.getElementById("questionInput");
const opt1 = document.getElementById("opt1");
const opt2 = document.getElementById("opt2");
const opt3 = document.getElementById("opt3");
const opt4 = document.getElementById("opt4");
const correctInput = document.getElementById("correctInput");

// BUTTONS
const addBtn = document.getElementById("addBtn");
const startBtn = document.getElementById("startBtn");

// QUIZ ELEMENTS
const quizBox = document.getElementById("quiz-box");
const createBox = document.getElementById("create-box");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");

const resultBox = document.getElementById("result");
const scoreText = document.getElementById("score");

// ADD QUESTION
addBtn.addEventListener("click", () => {

    if (
        !questionInput.value ||
        !opt1.value ||
        !opt2.value ||
        !opt3.value ||
        !opt4.value ||
        !correctInput.value
    ) {
        alert("Fill all fields");
        return;
    }

    quizData.push({
        question: questionInput.value,
        options: [opt1.value, opt2.value, opt3.value, opt4.value],
        answer: correctInput.value
    });

    alert("Question added!");

    // clear inputs
    questionInput.value = "";
    opt1.value = "";
    opt2.value = "";
    opt3.value = "";
    opt4.value = "";
    correctInput.value = "";
});

// START QUIZ
startBtn.addEventListener("click", () => {

    if (quizData.length === 0) {
        alert("Add at least 1 question");
        return;
    }

    createBox.classList.add("hide");
    quizBox.classList.remove("hide");

    loadQuestion();
});

// LOAD QUESTION
function loadQuestion() {
    let q = quizData[currentIndex];

    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";

    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.classList.add("option-btn");

        btn.onclick = () => {
            if (option === q.answer) score++;
        };

        optionsEl.appendChild(btn);
    });
}

// NEXT
nextBtn.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

// RESULT
function showResult() {
    quizBox.classList.add("hide");
    resultBox.classList.remove("hide");

    scoreText.textContent = `${score} / ${quizData.length}`;
}