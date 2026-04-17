// assets/js/study-guide.js

(function () {
  const modules = window.STUDY_MODULES || {};
  const contentEl = document.getElementById("module-content");

  function renderModule(key) {
    const mod = modules[key];
    if (!mod) {
      contentEl.innerHTML = `<p>Module not found.</p>`;
      return;
    }

    let html = `
      <div class="content-section">
        <h2>${mod.title}</h2>
        <p>${mod.overview}</p>
      </div>
    `;

    if (mod.sections && mod.sections.length) {
      mod.sections.forEach(sec => {
        html += `
          <div class="content-section">
            <h3>${sec.heading}</h3>
            <p>${sec.body}</p>
            ${sec.bullets ? `
              <ul>
                ${sec.bullets.map(b => `<li>${b}</li>`).join("")}
              </ul>
            ` : ""}
          </div>
        `;
      });
    }

    if (mod.glossary && mod.glossary.length) {
      html += `<div class="content-section"><h3>Glossary</h3>`;
      mod.glossary.forEach(entry => {
        html += `
          <div class="glossary-entry">
            <div class="glossary-term">${entry.term}</div>
            <div class="glossary-def">${entry.definition}</div>
          </div>
        `;
      });
      html += `</div>`;
    }

    if (mod.quiz && mod.quiz.length) {
      html += `<div class="content-section"><h3>Quiz</h3>`;
      mod.quiz.forEach((q, qi) => {
        html += `
          <div class="quiz-question" data-q="${qi}">
            <p>${q.question}</p>
            ${q.options
              .map(
                (opt, oi) => `
              <button class="quiz-option" data-q="${qi}" data-a="${oi}">
                ${opt}
              </button>
            `
              )
              .join("")}
          </div>
        `;
      });
      html += `</div>`;
    }

    contentEl.innerHTML = html;

    // quiz wiring
    if (mod.quiz && mod.quiz.length) {
      contentEl.querySelectorAll(".quiz-option").forEach(btn => {
        btn.addEventListener("click", () => {
          const qi = parseInt(btn.getAttribute("data-q"), 10);
          const ai = parseInt(btn.getAttribute("data-a"), 10);
          const q = mod.quiz[qi];

          const siblings = contentEl.querySelectorAll(
            `.quiz-option[data-q="${qi}"]`
          );
          siblings.forEach(s => {
            s.classList.remove("correct", "incorrect");
          });

          if (ai === q.answer) {
            btn.classList.add("correct");
          } else {
            btn.classList.add("incorrect");
          }
        });
      });
    }
  }

  document.querySelectorAll("[data-module]").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-module");
      renderModule(key);
    });
  });
})();
