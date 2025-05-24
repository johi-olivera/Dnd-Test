// === 1. PREGUNTAS ===
const questions = [
  {
    question: "¿Qué harías si ves un dragón?",
    options: [
      { text: "Le hablo para aprender de él", type: "mago" },
      { text: "Le clavo la espada", type: "guerrero" },
      { text: "Me escapo sin que me vea", type: "pícaro" },
      { text: "Lo observo para saber si es bueno o malo", type: "clérigo" }
    ]
  },
  {
    question: "¿Cuál es tu lugar ideal?",
    options: [
      { text: "Una biblioteca antigua", type: "mago" },
      { text: "Un campo de batalla", type: "guerrero" },
      { text: "Una ciudad llena de secretos", type: "pícaro" },
      { text: "Un templo en la montaña", type: "clérigo" }
    ]
  },
  // 👉 Podés seguir agregando preguntas acá
];

// === 2. PUNTAJES ===
const scores = {
  artífice: 0,
  bárbaro: 0,
  bardo: 0,
  brujo: 0,
  clérigo: 0,
  druida: 0,
  explorador: 0,
  guerrero: 0,
  hechicero: 0,
  mago: 0,
  monje: 0,
  paladín: 0,
  pícaro: 0
};

let currentQuestionIndex = 0;

// === MOSTRAR INTRO ===

function showIntro() {
  const container = document.getElementById('quiz-container');
  container.innerHTML = `
    <div class="intro">
      <div class="icon-circle">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scroll text-gold">
          <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"></path>
          <path d="M19 17V5a2 2 0 0 0-2-2H4"></path>
        </svg>
      </div>

      <h2>¡Bienvenido al D&D Character Quiz!</h2>
      <p>
      Este test te ayudará a descubrir qué clase de personaje de Dungeons & Dragons serías.
      Responde con sinceridad y prepárate para descubrir tu destino.
      </p>
      
      <div class="how">
        <h3>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sword mr-2 text-purple">
            <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"></polyline>
            <line x1="13" x2="19" y1="19" y2="13"></line>
            <line x1="16" x2="20" y1="16" y2="20"></line>
            <line x1="19" x2="21" y1="21" y2="19"></line>
          </svg> ¿CÓMO FUNCIONA?
        </h3>
        <ol>
          <li>Respondé una serie de preguntas multiple-choice sobre tus preferencias y personalidad</li>
          <li>Mi algoritmo mágico va a calcular qué clase de D&D matchea mejor con tus respuestas</li>
          <li>Descubrí tu clase de personaje con una descripción sobre tus habilidades y rasgos</li>
        </ol>
      </div>

      <div class="ex-classes">

        <div class="examples">
          <h3>GUERRERO</h3>
          <p>¿Sos un valiente guerrero?</p>
        </div>

        <div class="examples">
          <h3>MAGO</h3>
          <p>¿Un ingenioso mago?</p>
        </div>
        
        <div class="examples">
          <h3>PÍCARO</h3>
          <p>¿O un ágil ladrón?</p>
        </div>
      
      </div>

      <button id="start-btn">
        <b>Comenzar test</b>
      </button>
    </div>
  `;

  document.getElementById('start-btn').onclick = () => {
    showQuestion(); // Mostrar la primera pregunta al hacer click
  };
}

// === MOSTRAR PREGUNTAS ===
function showQuestion() {
  const container = document.getElementById('quiz-container');
  const q = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  container.innerHTML = `
    <h2>${q.question}</h2>
    <form id="options-form" class="options">
      ${q.options.map((opt, idx) => `
        <label>
          <input type="radio" name="option" value="${opt.type}" ${idx === 0 ? "checked" : ""}>
          ${opt.text}
        </label>
      `).join('')}
      <button type="submit" class="next-btn">${isLastQuestion ? "Ver resultado" : "Siguiente"}</button>
    </form>
    <p>Pregunta ${currentQuestionIndex + 1} de ${questions.length}</p>
  `;

  const form = document.getElementById('options-form');
  form.onsubmit = (e) => {
    e.preventDefault();
    const selected = form.option.value;
    selectOption(selected);

    if (isLastQuestion) {
      showResults(); // 👈 esta función deberías tenerla ya creada
    } else {
      currentQuestionIndex++;
      showQuestion();
    }
  };


}

// === 4. MANEJAR RESPUESTA ===
function selectOption(type) {
  scores[type]++;
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

// === 5. MOSTRAR RESULTADO FINAL ===
function showResult() {
  const container = document.getElementById('quiz-container');
  const result = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];

  container.innerHTML = `
    <h2>¡Sos un/a ${result.toUpperCase()}!</h2>
    <p>Este personaje representa tu estilo dentro del mundo de D&D.</p>
  `;
}

// === 6. ARRANCAR QUIZ ===
window.onload = () => {
  showIntro();
};
