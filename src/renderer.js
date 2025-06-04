// === 1. PREGUNTAS ===
const questions = [
  {
    question: "¿CÓMO RESPONDÉS CUANDO ALGO NO SALE COMO ESPERABAS?",
    options: [
      { text: "Me frustro al principio, pero busco otra manera. Hay más de una solución.", type: {artífice: 2, mago: 1, druida: 1} },
      { text: "Me conecto con mi instinto y actúo sin pensar demasiado.", type: {bárbaro: 2, explorador: 1, monje: 1} },
      { text: "Lo tomo como una señal o un mensaje. Tal vez hay algo que no entendí aún.", type: {brujo: 2, clérigo: 1, hechicero: 1} },
      { text: "Busco a alguien en quien confío para pensarlo juntos.", type: {paladín: 2, bardo: 1, clérigo: 1} },
      { text: "Improviso y me adapto. Siempre hay una forma de hacer que funcione.", type: {bardo: 2, pícaro: 1, monje: 1} }
    ]
  },
  {
    question: "¿CÓMO ENCARÁS UNA CENA CON PERSONAS QUE NO CONOCES?",
    options: [
      { text: "Elijo ingredientes raros o nuevos, quiero sorprender.", type: {druida: 2, artífice: 1, hechicero: 1} },
      { text: "Investigo qué les gusta antes y armo algo a medida.", type: {mago: 2, clérigo: 1, explorador: 1} },
      { text: "Improviso con lo que hay, confío en mi instinto", type: {bárbaro: 2, brujo: 1, guerrero: 1} },
      { text: "Decoro la mesa (with the fancy shit), creo una experiencia. La comida es solo una parte.", type: {bardo: 2, paladín: 1, brujo: 1} },
      { text: "Algo simple, nutritivo, eficiente. Lo importante es que todos estén bien.", type: {monje: 2, paladín: 1, clérigo: 1} }
    ]
  },
  {
    question: "¿QUÉ ACTIVIDAD TE RESULTA MISTERIOSAMENTE SIGNIFICATIVA?",
    options: [
      { text: "Poner tu playlist favorita mientras lavás los platos.", type: {bardo: 2, hechicero: 1, druida: 1} },
      { text: "Tender la ropa de cierta forma, en cierto orden.", type: {monje: 2, artífice: 1, clérigo: 1} },
      { text: "Mirar por la ventana mientrás viajás en colectivo.", type: {brujo: 2, mago: 1, explorador: 1} },
      { text: "Revisar compulsivamente si cerraste bien la puerta antes de salir.", type: {pícaro: 2, paladín: 1, guerrero: 1} },
      { text: "Hablar con animales por la calle como si pudieran responder", type: {druida: 2, bardo: 1, explorador: 1} }
    ]
  },
  {
    question: "¿QUÉ TIPO DE SUEÑO RECURRENTE TE RESULTA MÁS FAMILIAR?",
    options: [
      { text: "Que estás buscando algo que no sabés qué es.", type: {brujo: 2, explorador: 1, hechicero: 1} },
      { text: "Que estás en una biblioteca infinita.", type: {mago: 2, clérigo: 1, artífice: 1} },
      { text: "Que alguien te sigue, pero no sabés quién.", type: {pícaro: 2, monje: 1, bárbaro: 1} },
      { text: "Que te subís a un escenario sin saber tu parte.", type: {bardo: 2, paladín: 1, hechicero: 1} },
      { text: "Que volvés al mismo lugar del que tratás de escapar.", type: {bárbaro: 2, guerrero: 1, druida: 1} }
    ]
  },
  {
    question: "¿QUÉ RUTINA TE DA PAZ MENTAL, INCLUSO SI ES ABURRIDA?",
    options: [
      { text: "Limpiar tu espacio de trabajo.", type: {artífice: 2, clérigo: 1, paladín: 1} },
      { text: "Hacer listas (aunque después no las sigas).", type: {mago: 2, explorador: 1, monje: 1} },
      { text: "Salir a caminar sin rumbo.", type: {explorador: 2, druida: 1, pícaro: 1} },
      { text: "Preparar el mate o el café con mucho cuidado.", type: {monje: 2, bardo: 1, clérigo: 1} },
      { text: "Organizar una conversación en tu cabeza antes de que pase.", type: {bardo: 2, brujo: 1, hechicero: 1} }
    ]
  },
  {
    question: "¿QUÉ DETALLE MENOR EN OTRAS PERSONAS NOTÁS FÁCILMENTE?",
    options: [
      { text: "Cómo se mueven o se acomodan en el espacio.", type: {guerrero: 2, monje: 1, pícaro: 1} },
      { text: "El tono de voz y las pausas al hablar.", type: {bardo: 2, brujo: 1, paladín: 1} },
      { text: "Si llevan algo poco común encima.", type: {mago: 2, artífice: 1, hechicero: 1} },
      { text: "Si parecen perdidos o incómodos.", type: {clérigo: 2, paladín: 1, druida: 1} },
      { text: "Si están mintiendo o escondiendo algo.", type: {pícaro: 2, brujo: 1, explorador: 1} }
    ]
  },
  {
    question: "¿QUÉ ACTIVIDAD TE PONE EN 'MODO AUTOMÁTICO?",
    options: [
      { text: "Pasear en transporte público escuchando música.", type: {brujo: 2, hechicero: 1, explorador: 1} },
      { text: "Desarmar algo y volver a armarlo aunque no sea necesario.", type: {artífice: 2, mago: 1, monje: 1} },
      { text: "Seguir un rastro en la calle: una hoja, una huella, una señal.", type: {explorador: 2, druida: 1, pícaro: 1} },
      { text: "Escribir o dibujar sin pensar, solo dejar que fluya.", type: {bardo: 2, hechicero: 1, brujo: 1} },
      { text: "Entrenar o mover el cuerpo sin distracciones.", type: {bárbaro: 2, guerrero: 1, monje: 1} }
    ]
  },
  {
    question: "¿QUÉ OBJETO COTIDIANO TE REPRESENTA MÁS?",
    options: [
      { text: "Una libreta llena de notas, dibujos y cosas pegadas.", type: {mago: 2, artífice: 1, bardo: 1} },
      { text: "Una navaja pequeña y bien afilada.", type: {pícaro: 2, guerrero: 1, monje: 1} },
      { text: "Una brújula antigua que no siempre apunta al norte.", type: {explorador: 2, druida: 1, brujo: 1} },
      { text: "Un amuleto que no sabés si realmente tiene poder o no.", type: {brujo: 2, clérigo: 1, paladín: 1} },
      { text: "Un instrumento musical o algo que hace ruido si lo tocás.", type: {bardo: 2, hechicero: 1, druida: 1} }
    ]
  },
  {
    question: "¿CÓMO DISFRUTAS DE TU TIEMPO LIBRE?",
    options: [
      { text: "Construir inventos o arreglar cosas por tu cuenta", type: { artífice: 2, guerrero: 1 } },
      { text: "Meditar en silencio o practicar artes marciales", type: { monje: 2, paladín: 1 } },
      { text: "Salir a explorar la naturaleza o ir de aventura al aire libre", type: { explorador: 2, druida: 1 } },
      { text: "Cantar, bailar o relatar historias para entretener a la gente", type: { bardo: 2, paladín: 1 } }
    ]
  },
  {
    question: "¿CÓMO REACCIONAS ANTE UN DESAFÍO IMPORTANTE?",
    options: [
      { text: "Investigo cada detalle y busco formas creativas de resolverlo", type: { artífice: 2, mago: 1 } },
      { text: "Mantengo la calma, me concentro y confío en mi entrenamiento físico y mental", type: { monje: 2, paladín: 1 } },
      { text: "Actúo con coraje e ímpetu, lanzándome directamente a enfrentar el obstáculo", type: { bárbaro: 2, guerrero: 1 } },
      { text: "Busco guía en mis creencias o en la naturaleza, trabajando con otros para superar el reto", type: { clérigo: 1, explorador: 2 } }
    ]
  },
  {
    question: "¿DÓNDE TE GUSTARÍA VIVIR?",
    options: [
      { text: "En un taller propio lleno de herramientas, experimentos y artefactos por crear", type: { artífice: 2, mago: 1 } },
      { text: "En un monasterio sereno o templo rodeado de naturaleza, meditando en paz", type: { monje: 2, clérigo: 1 } },
      { text: "En un castillo o fortaleza entrenando con otros guerreros cada día", type: { guerrero: 2, paladín: 1 } },
      { text: "En una cabaña apartada en el bosque, explorando lugares salvajes", type: { explorador: 2, druida: 1 } }
    ]
  }
  
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

const classDescriptions = {
  mago: "Un estudioso del arcano, domina hechizos mediante el conocimiento y la práctica.",
  guerrero: "Un combatiente versátil, fuerte y valiente en el campo de batalla.",
  pícaro: "Ágil y astuto, experto en el sigilo, trampas y golpes críticos.",
  clérigo: "Guerrero sagrado que canaliza poderes divinos para sanar o castigar.",
  // Agregar más clases si es necesario
};

let currentQuestionIndex = 0;

// === MOSTRAR INTRO ===

function showIntro() {
  const container = document.getElementById('quiz-container');
  container.innerHTML = `
    <div class="intro">
      <div class="icon-circle">
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scroll text-gold">
          <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"></path>
          <path d="M19 17V5a2 2 0 0 0-2-2H4"></path>
        </svg>
      </div>

      <h2>¡Bienvenido al Test de Clases de D&D!</h2>
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
          <li>Respondé una serie de preguntas multiple-choice sobre tus preferencias y personalidad.</li>
          <li>Mi algoritmo mágico va a calcular qué clase de D&D matchea mejor con tus respuestas.</li>
          <li>Descubrí tu clase de personaje con una descripción sobre tus habilidades y rasgos.</li>
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
  const isFirstQuestion = currentQuestionIndex === 0;

  container.innerHTML = `
    <p class="progress">Pregunta ${currentQuestionIndex + 1} de ${questions.length}</p>
    <h2>${q.question}</h2>
    <form id="options-form" class="options">
      ${q.options.map((opt, idx) => `
        <label>
          <input type="radio" name="option" value="${idx}" ${idx === 0 ? "checked" : ""}>
          ${opt.text}
        </label>
      `).join('')}
      <div class="button-group">
        <div class="btn-container">
          ${!isFirstQuestion ? `<button type="button" id="prev-btn" class="prev-btn">🡠 Anterior</button>` : '<div></div>'}
          <button type="submit" class="next-btn">${isLastQuestion ? "Ver resultado" : "Siguiente 🡢"}</button>
        </div>
      </div>
    </form>
  `;

  const form = document.getElementById('options-form');

  // Siguiente (submit)
  form.onsubmit = (e) => {
    e.preventDefault();
    const selected = form.option.value;
    selectOption(selected);
  };

  // Anterior (solo si no es la primera)
  const prevBtn = document.getElementById('prev-btn');
  if (prevBtn) {
    prevBtn.onclick = () => {
      currentQuestionIndex--;
      showQuestion();
    };
  }
}


// === 4. MANEJAR RESPUESTA ===

let answers = [];

function selectOption(indexStr) {
  const index = parseInt(indexStr);
  const type = questions[currentQuestionIndex].options[index].type;
  // Guarda la selección
  answers[currentQuestionIndex] = type;
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

// === 5. MOSTRAR RESULTADO FINAL ===
function showResult() {
  // Reiniciar puntajes
  Object.keys(scores).forEach(key => scores[key] = 0);

  answers.forEach(answer => {
    if (answer) {
      Object.entries(answer).forEach(([cls, value]) => {
        scores[cls] += value;
      });
    }
  });

  const container = document.getElementById('quiz-container');
  const result = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  const description = classDescriptions[result] || "Una clase misteriosa con talentos únicos";

  container.innerHTML = `
    <div class="result">
      <h1>TU CLASE</h1>
      <p>Las fuerzas arcanas revelaron tu verdadera naturaleza.<p>
      <h2>${result.toUpperCase()}</h2>
      <p class="description">${description}</p>
      <button class="restart" onclick="restartQuiz()">Reiniciar</button>
    </div>
  `;
}

// === 6. ARRANCAR QUIZ ===
window.onload = () => {
  showIntro();
};

// === 7. REINICIAR QUIZ ===

function restartQuiz() {
  currentQuestionIndex = 0;
  answers = [];
  showIntro();
}