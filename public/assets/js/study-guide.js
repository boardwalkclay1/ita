// GLOBAL MODULE STORAGE
window.STUDY_MODULES = window.STUDY_MODULES || {};

// DOM ELEMENTS
const moduleContent = document.getElementById("module-content");

// Load a module file dynamically
async function loadModule(moduleName) {
  if (window.STUDY_MODULES[moduleName]) {
    renderModule(moduleName);
    return;
  }

  try {
    await import(`/assets/js/modules/${moduleName}.js`);
    renderModule(moduleName);
  } catch (err) {
    moduleContent.innerHTML = `<p style="color:#ff6b9c;">Module failed to load.</p>`;
  }
}

// Render module content
function renderModule(moduleName) {
  const mod = window.STUDY_MODULES[moduleName];
  if (!mod) return;

  let html = `
    <h1>${mod.title}</h1>
    <p>${mod.overview}</p>
  `;

  // Sections
  mod.sections.forEach(sec => {
    html += `
      <div class="content-section">
        <h2>${sec.heading}</h2>
        <p>${sec.body}</p>
        <ul>
          ${sec.bullets.map(b => `<li>${b}</li>`).join("")}
        </ul>
      </div>
    `;
  });

  // Glossary
  if (mod.glossary) {
    html += `<h2>Glossary</h2>`;
    mod.glossary.forEach(entry => {
      html += `
        <div class="glossary-entry">
          <span class="glossary-term">${entry.term}:</span>
          <span>${entry.definition}</span>
        </div>
      `;
    });
  }

  // Quiz
  if (mod.quiz) {
    html += `<h2>Quiz</h2>`;
    mod.quiz.forEach((q, i) => {
      html += `
        <div class="quiz-question">
          <p><strong>${i + 1}. ${q.question}</strong></p>
          ${q.options
            .map(
              (opt, idx) =>
                `<button class="quiz-option" data-q="${i}" data-opt="${idx}">${opt}</button>`
            )
            .join("")}
        </div>
      `;
    });
  }

  moduleContent.innerHTML = html;

  // Attach quiz logic
  document.querySelectorAll(".quiz-option").forEach(btn => {
    btn.addEventListener("click", () => {
      const qIndex = btn.dataset.q;
      const optIndex = btn.dataset.opt;
      const correct = window.STUDY_MODULES[moduleName].quiz[qIndex].answer;

      if (optIndex == correct) {
        btn.classList.add("correct");
      } else {
        btn.classList.add("incorrect");
      }
    });
  });
}

// Sidebar click handling
document.querySelectorAll("[data-module]").forEach(btn => {
  btn.addEventListener("click", () => {
    const moduleName = btn.dataset.module;
    loadModule(moduleName);
  });
});
