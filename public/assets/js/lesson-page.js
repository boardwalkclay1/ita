function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

function findLessonIndexById(id) {
  if (!window.LESSONS || !Array.isArray(window.LESSONS)) return 0;
  const idx = window.LESSONS.findIndex((l) => l.id === id);
  return idx === -1 ? 0 : idx;
}

function renderLesson() {
  if (!window.LESSONS || !window.LESSONS.length) return;

  const id = getQueryParam("id");
  const index = findLessonIndexById(id);
  const lesson = window.LESSONS[index];

  const lang = window.currentLang === "es" ? "es" : "en";

  const titleEl = document.getElementById("lesson-title");
  const catPillEl = document.getElementById("lesson-category-pill");
  const catSubEl = document.getElementById("lesson-category-sub");
  const textEl = document.getElementById("lesson-text");
  const highlightEl = document.getElementById("lesson-highlight");
  const tipEl = document.getElementById("lesson-tip");
  const quizQuestionEl = document.getElementById("quiz-question");
  const quizOptionsEl = document.getElementById("quiz-options");
  const quizFeedbackEl = document.getElementById("quiz-feedback");
  const progressValueEl = document.getElementById("progress-value");
  const progressBarInnerEl = document.getElementById("progress-bar-inner");

  const titleKey = lang === "es" ? "title_es" : "title_en";
  const catKey = lang === "es" ? "category_es" : "category_en";
  const textKey = lang === "es" ? "text_es" : "text_en";
  const highlightKey = lang === "es" ? "highlight_es" : "highlight_en";
  const tipKey = lang === "es" ? "tip_es" : "tip_en";
  const qQuestionKey = lang === "es" ? "question_es" : "question_en";
  const qOptionsKey = lang === "es" ? "options_es" : "options_en";
  const qCorrectExplKey = lang === "es" ? "correct_expl_es" : "correct_expl_en";
  const qWrongExplKey = lang === "es" ? "wrong_expl_es" : "wrong_expl_en";

  titleEl.textContent = lesson[titleKey];
  catPillEl.textContent = lesson[catKey];
  catSubEl.textContent = lesson[catKey];
  textEl.textContent = lesson[textKey];
  highlightEl.textContent = lesson[highlightKey];
  tipEl.textContent = lesson[tipKey];

  quizQuestionEl.textContent = lesson.quiz[qQuestionKey];
  quizOptionsEl.innerHTML = "";
  quizFeedbackEl.textContent = "";
  quizFeedbackEl.style.color = "#c7d5cc";

  const options = lesson.quiz[qOptionsKey];
  options.forEach((opt, idx) => {
    const label = document.createElement("label");
    label.className = "quiz-option";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "quiz-answer";
    input.value = String(idx);

    const span = document.createElement("span");
    span.textContent = opt;

    label.appendChild(input);
    label.appendChild(span);
    quizOptionsEl.appendChild(label);
  });

  const total = window.LESSONS.length;
  const position = index + 1;
  progressValueEl.textContent =
    lang === "es"
      ? `Lección ${position} de ${total}`
      : `Lesson ${position} of ${total}`;

  const percent = (position / total) * 100;
  progressBarInnerEl.style.width = `${percent}%`;

  const form = document.getElementById("lesson-quiz-form");
  form.onsubmit = function (e) {
    e.preventDefault();
    const selected = form.querySelector("input[name='quiz-answer']:checked");
    if (!selected) {
      quizFeedbackEl.textContent =
        lang === "es"
          ? "Elige una respuesta para continuar."
          : "Choose an answer to continue.";
      quizFeedbackEl.style.color = "#ffb347";
      return;
    }

    const answerIndex = parseInt(selected.value, 10);
    if (answerIndex === lesson.quiz.correct) {
      quizFeedbackEl.textContent = lesson.quiz[qCorrectExplKey];
      quizFeedbackEl.style.color = "#7CFFB2";
    } else {
      quizFeedbackEl.textContent = lesson.quiz[qWrongExplKey];
      quizFeedbackEl.style.color = "#ffb347";
    }
  };

  const prevBtn = document.getElementById("prev-lesson");
  const nextBtn = document.getElementById("next-lesson");

  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === total - 1;

  prevBtn.onclick = function () {
    if (index > 0) {
      const prevId = window.LESSONS[index - 1].id;
      window.location.search = `?id=${encodeURIComponent(prevId)}`;
    }
  };

  nextBtn.onclick = function () {
    if (index < total - 1) {
      const nextId = window.LESSONS[index + 1].id;
      window.location.search = `?id=${encodeURIComponent(nextId)}`;
    }
  };
}

document.addEventListener("DOMContentLoaded", () => {
  if (typeof window.currentLang === "undefined") {
    window.currentLang = "en";
  }

  renderLesson();

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      setTimeout(renderLesson, 0);
    });
  });
});
