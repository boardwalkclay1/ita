document.addEventListener("DOMContentLoaded", () => {
  const quizForm = document.querySelector("[data-quiz-id='lesson1']");
  if (!quizForm) return;

  const feedbackEl = quizForm.querySelector("[data-quiz-feedback]");
  const correctValue = quizForm.dataset.correct;

  quizForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(quizForm);
    const answer = formData.get("quiz1");

    if (!answer) {
      feedbackEl.textContent = currentLang === "es"
        ? "Elige una respuesta para continuar."
        : "Choose an answer to continue.";
      return;
    }

    const dict = I18N_DICTIONARY[currentLang] || I18N_DICTIONARY.en;

    if (answer === correctValue) {
      feedbackEl.textContent = dict.quiz1_correct;
      feedbackEl.style.color = "#7CFFB2";
    } else {
      feedbackEl.textContent = dict.quiz1_incorrect;
      feedbackEl.style.color = "#ffb347";
    }
  });
});
