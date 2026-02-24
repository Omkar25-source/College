const questions = [
  {
    question: "Which language is primarily used for web development?",
    answers: ["Python", "JavaScript", "C++", "Java"],
    correctIndex: 1,
  },
  {
    question: "Which HTML tag is used to include JavaScript?",
    answers: ["&lt;js&gt;", "&lt;javascript&gt;", "&lt;script&gt;", "&lt;code&gt;"],
    correctIndex: 2,
  },
  {
    question: "Which company developed JavaScript?",
    answers: ["Microsoft", "Netscape", "Google", "Apple"],
    correctIndex: 1,
  },
  {
    question: "Which CSS property changes text color?",
    answers: ["background-color", "font-weight", "color", "text-style"],
    correctIndex: 2,
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    answers: ["//", "&lt;!-- --&gt;", "#", "/* */"],
    correctIndex: 0,
  },
];

const quizForm = document.getElementById("quiz-form");
const submitBtn = document.getElementById("submit-btn");
const resultDiv = document.getElementById("result");

function buildQuiz() {
  const output = questions
    .map((q, index) => {
      const answersHTML = q.answers
        .map(
          (answer, i) =>
            `<label>
              <input type="radio" name="question${index}" value="${i}" />
              ${answer}
            </label>`
        )
        .join("");
      return `
        <div class="question">
          <h3>Q${index + 1}: ${q.question}</h3>
          <div class="answers">${answersHTML}</div>
        </div>
      `;
    })
    .join("");
  quizForm.innerHTML = output;
}

function showResults() {
  let score = 0;
  questions.forEach((q, index) => {
    const selector = `input[name=question${index}]:checked`;
    const selected = quizForm.querySelector(selector);
    if (selected) {
      const answerValue = parseInt(selected.value);
      if (answerValue === q.correctIndex) {
        score++;
      }
    }
  });
  resultDiv.textContent = `You scored ${score} out of ${questions.length}!`;
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  showResults();
});

buildQuiz();