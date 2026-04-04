const I18N_DICTIONARY = {
  en: {
    app_title: "Ita’s Arborist Garden",
    app_subtitle: "Short lessons, gentle quizzes, and a growing forest of knowledge.",
    lesson1_title: "Lesson 1 · Tree Biology Basics",
    lesson1_subtitle: "Understanding how trees live, breathe, and grow.",
    lesson1_text: "An arborist must understand how trees function: roots absorb water and nutrients, the trunk transports them, and leaves use sunlight to create energy. Healthy structure and proper growth are the foundation of safe tree work.",
    lesson1_highlight: "Roots, trunk, and crown must all be evaluated before any pruning or climbing.",
    quiz1_question: "Which part of the tree is mainly responsible for absorbing water and nutrients?",
    quiz1_opt1: "The crown (leaves and branches)",
    quiz1_opt2: "The trunk",
    quiz1_opt3: "The roots",
    quiz1_correct: "Correct. The roots absorb water and nutrients from the soil.",
    quiz1_incorrect: "Not quite. Think about the part that lives in the soil.",
    progress_label: "Certification path",
    progress_value: "Lesson 1 of 20",
    progress_badge: "Growing knowledge",
    footer_left: "Made with care for Ita’s arborist journey.",
    footer_right: "Next lesson"
  },
  es: {
    app_title: "El Jardín Arborista de Ita",
    app_subtitle: "Lecciones cortas, pequeños exámenes y un bosque de conocimiento.",
    lesson1_title: "Lección 1 · Biología básica del árbol",
    lesson1_subtitle: "Entendiendo cómo los árboles viven, respiran y crecen.",
    lesson1_text: "Una arborista debe entender cómo funcionan los árboles: las raíces absorben agua y nutrientes, el tronco los transporta y las hojas usan la luz del sol para crear energía. Una estructura sana y un crecimiento adecuado son la base de un trabajo seguro.",
    lesson1_highlight: "Raíces, tronco y copa deben evaluarse antes de podar o trepar.",
    quiz1_question: "¿Qué parte del árbol absorbe principalmente el agua y los nutrientes?",
    quiz1_opt1: "La copa (hojas y ramas)",
    quiz1_opt2: "El tronco",
    quiz1_opt3: "Las raíces",
    quiz1_correct: "Correcto. Las raíces absorben el agua y los nutrientes del suelo.",
    quiz1_incorrect: "Casi. Piensa en la parte que vive en el suelo.",
    progress_label: "Camino a la certificación",
    progress_value: "Lección 1 de 20",
    progress_badge: "Conocimiento en crecimiento",
    footer_left: "Hecho con cariño para el camino arborista de Ita.",
    footer_right: "Siguiente lección"
  }
};

let currentLang = "en";

function applyLanguage(lang) {
  currentLang = lang;
  const dict = I18N_DICTIONARY[lang] || I18N_DICTIONARY.en;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      applyLanguage(btn.dataset.lang);
    });
  });

  applyLanguage(currentLang);
});
