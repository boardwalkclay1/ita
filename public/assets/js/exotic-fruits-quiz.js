// ===============================
// 🍑 EXOTIC FRUITS QUIZ ENGINE
// ===============================

const quizData = [
  {
    question: "Which fruit is described as tasting like raspberry cheesecake?",
    options: [
      "Red Custard Apple",
      "Black Sapote",
      "Star Apple (Caimito)",
      "Cecropia peltata"
    ],
    answer: 0,
    explanation: "Red Custard Apple (Annona reticulata) is known for its sweet, creamy, raspberry‑cheesecake flavor."
  },
  {
    question: "Which fruit is known as the 'chocolate pudding fruit'?",
    options: [
      "Star Apple",
      "Black Sapote",
      "Roxburgh Fig",
      "Cecropia peltata"
    ],
    answer: 1,
    explanation: "Black Sapote turns dark and creamy when ripe, giving it a chocolate‑pudding texture."
  },
  {
    question: "Which fruit has a condensed‑milk flavor?",
    options: [
      "Caimito (Star Apple)",
      "Red Custard Apple",
      "Black Sapote",
      "Roxburgh Fig"
    ],
    answer: 0,
    explanation: "Caimito is famous for its sweet, condensed‑milk taste and metallic leaf undersides."
  },
  {
    question: "Which fruit has a berry aroma and raspberry taste without tartness?",
    options: [
      "Cecropia peltata",
      "Roxburgh Fig",
      "Black Sapote",
      "Star Apple"
    ],
    answer: 1,
    explanation: "Roxburgh Fig is known for its deep berry aroma and smooth raspberry‑like flavor."
  },
  {
    question: "Which fruit is nicknamed the 'gummy worm fruit'?",
    options: [
      "Cecropia peltata",
      "Black Sapote",
      "Red Custard Apple",
      "Star Apple"
    ],
    answer: 0,
    explanation: "Cecropia peltata produces long, soft fruits that resemble gummy worms."
  },
  {
    question: "Which fruit belongs to the Annonaceae family?",
    options: [
      "Red Custard Apple",
      "Black Sapote",
      "Caimito",
      "Cecropia peltata"
    ],
    answer: 0,
    explanation: "Annona reticulata (Custard Apple) is part of the Annonaceae family."
  },
  {
    question: "Which fruit tree often has ants living inside its hollow stems?",
    options: [
      "Roxburgh Fig",
      "Cecropia peltata",
      "Black Sapote",
      "Star Apple"
    ],
    answer: 1,
    explanation: "Cecropia trees have hollow stems frequently inhabited by ants."
  },
  {
    question: "Which fruit has a metallic bronze underside on its leaves?",
    options: [
      "Red Custard Apple",
      "Star Apple (Caimito)",
      "Black Sapote",
      "Roxburgh Fig"
    ],
    answer: 1,
    explanation: "Caimito leaves are green on top and metallic bronze underneath."
  },
  {
    question: "Which fruit is native to the Indian jungle?",
    options: [
      "Roxburgh Fig",
      "Black Sapote",
      "Cecropia peltata",
      "Red Custard Apple"
    ],
    answer: 0,
    explanation: "Roxburgh Fig originates from the deep forests of India and Southeast Asia."
  },
  {
    question: "Which fruit has a reticulated (net‑like) skin pattern?",
    options: [
      "Red Custard Apple",
      "Black Sapote",
      "Caimito",
      "Cecropia peltata"
    ],
    answer: 0,
    explanation: "The Custard Apple’s name 'reticulata' refers to its net‑like skin texture."
  },
  {
    question: "Which fruit turns dark brown/black when ripe?",
    options: [
      "Black Sapote",
      "Caimito",
      "Roxburgh Fig",
      "Cecropia peltata"
    ],
    answer: 0,
    explanation: "Black Sapote ripens into a dark, pudding‑like consistency."
  },
  {
    question: "Which fruit grows in clusters directly on the trunk (cauliflorous)?",
    options: [
      "Roxburgh Fig",
      "Red Custard Apple",
      "Caimito",
      "Cecropia peltata"
    ],
    answer: 0,
    explanation: "Roxburgh Fig produces fruit directly on its trunk and large branches."
  }
];

// ===============================
// QUIZ RENDERING
// ===============================

const quizContainer = document.getElementById("quiz-container");
const startBtn = document.getElementById("startQuizBtn");

let currentQuestion = 0;
let score = 0;

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  startBtn.style.display = "none";
  renderQuestion();
}

function renderQuestion() {
  const q = quizData[currentQuestion];

  quizContainer.innerHTML = `
    <div class="quiz-card">
      <h3>${q.question}</h3>
      <div class="quiz-options">
        ${q.options
          .map(
            (opt, i) => `
          <button class="quiz-option" onclick="selectAnswer(${i})">
            ${opt}
          </button>
        `
          )
          .join("")}
      </div>
    </div>
  `;
}

function selectAnswer(selected) {
  const q = quizData[currentQuestion];

  const isCorrect = selected === q.answer;
  if (isCorrect) score++;

  quizContainer.innerHTML = `
    <div class="quiz-feedback">
      <h3>${isCorrect ? "Correct! 🎉" : "Not quite 🍃"}</h3>
      <p>${q.explanation}</p>
      <button class="quiz-next" onclick="nextQuestion()">Next</button>
    </div>
  `;
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion >= quizData.length) {
    showResults();
  } else {
    renderQuestion();
  }
}

function showResults() {
  quizContainer.innerHTML = `
    <div class="quiz-results">
      <h2>Your Score: ${score} / ${quizData.length}</h2>
      <p>${score === quizData.length ? "Perfect! 🍑🌸" : "Great job! Keep practicing 🌿"}</p>
      <button class="quiz-restart" onclick="startQuiz()">Try Again</button>
    </div>
  `;

  window.scrollTo({ top: quizContainer.offsetTop - 40, behavior: "smooth" });
}

startBtn.addEventListener("click", startQuiz);
