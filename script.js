let questions = [
  {
    question: "Wer hat<br> HTML erfunden?",
    answer_1: "Robbie Williams",
    answer_2: "Lady Gaga",
    answer_3: "Tim Berners - Lee",
    answer_4: "Justin Biber",
    right_answer: 3,
  },

  {
    question: "Was bedeutet das<br> HTML Tag &lt;a&gt;?",
    answer_1: "Text Fett",
    answer_2: "Container",
    answer_3: "Ein Link",
    answer_4: "Kursiv",
    right_answer: 3,
  },

  {
    question: "Wie bindet man eine Website in eine Website ein?",
    answer_1: "&lt;iframe&gt;, &lt;frame;, and &lt;a&gt;",
    answer_2: "&lt;iframe&gt;",
    answer_3: "&lt;frame&gt;",
    answer_4: "J&lt;iframe&gt;, &lt;frame;",
    right_answer: 2,
  },
  {
    question: "Welches Attribut kann man NICHT für Textarea verwenden?",
    answer_1: "readonly",
    answer_2: "max",
    answer_3: "from",
    answer_4: "spellcheck",
    right_answer: 1,
  },
  {
    question: "Wie definiert man in Javascript eine Variable?",
    answer_1: "let 100 = rate;",
    answer_2: "100 = let rate;",
    answer_3: "rate = 100",
    answer_4: "let rate = 100",
    right_answer: 4,
  },

  {
    question:
      "Wofür steht denn eigentlich RAM?",
    answer_1: "Linguistikinformatik",
    answer_2: "Real Access Memory",
    answer_3: "Random Access Memory",
    answer_4: "Read And More",
    right_answer: 3,
  },

  {
    question:
      "Was bedeutet CPU?",
    answer_1: "Credit Power Union",
    answer_2: "Central Processing Unit",
    answer_3: "Circular Print Unit",
    answer_4: "Circular Power Union",
    right_answer: 2,
  },

  {
    question:
    "Was ist eine IP-Adresse?",
    answer_1: "Ein Druckerprotokoll",
    answer_2: "Eine Microsoft Applikation",
    answer_3: "Eine Netzwerkadresse",
    answer_4: "Inner Peace",
    right_answer: 3,
  },
];

let rightQuestions = 0;

let currentQuestion = 0;

function init() {
  document.getElementById("all-questions").innerHTML = questions.length;

  showQuestion();
}

function showQuestion() {
  
  if (currentQuestion >= questions.length) {
    document.getElementById("endScreen").style = "";
    document.getElementById("questionBody").style = "display: none";
    document.getElementById("amountOfQuestions").innerHTML = questions.length;
    document.getElementById("amountOfrightQuestions").innerHTML =
      rightQuestions++;
    document.getElementById("header-image").src = "img/tropy.png";
  } else {
    let question = questions[currentQuestion];

    document.getElementById("question-number").innerHTML = currentQuestion + 1;

    document.getElementById("questiontext").innerHTML = question["question"];

    document.getElementById("answer_1").innerHTML = question["answer_1"];
    document.getElementById("answer_2").innerHTML = question["answer_2"];
    document.getElementById("answer_3").innerHTML = question["answer_3"];
    document.getElementById("answer_4").innerHTML = question["answer_4"];

    let percent = currentQuestion/ questions.length ;
    percent = percent * 100; 
    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style = `width: ${percent}%;`;
    console.log('Fortschritt:', percent);
   


  }
}

function answer(selection) {
  let question = questions[currentQuestion];
  console.log("Selcted answer is ", selection);
  let selectedQuestionNumber = selection.slice(-1);
  console.log("selectedQuestionNumber is", selectedQuestionNumber);
  console.log("Current question is ", question["right_answer"]);

  let idOfRightAnswer = `answer_${question["right_answer"]}`;

  if (selectedQuestionNumber == question["right_answer"]) {
    console.log("Richtige Antwort!");
    document.getElementById(selection).parentNode.classList.add("bg-success");
    rightQuestions++;
  } else {
    console.log("Falsche Antwort!");
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document
      .getElementById(idOfRightAnswer)
      .parentNode.classList.add("bg-success");
  }

  document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
  currentQuestion++;
  resetAnswerButtons();
  showQuestion();
}

function resetAnswerButtons() {
  document.getElementById("next-button").disabled = true;
  document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_1").parentNode.classList.remove("bg-success");
  document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_2").parentNode.classList.remove("bg-success");
  document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_3").parentNode.classList.remove("bg-success");
  document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_4").parentNode.classList.remove("bg-success");
}


function restartGame(){
  document.getElementById("questionBody").style = "";
  document.getElementById("endScreen").style = "display: none" ;
  rightQuestions = 0;
  currentQuestion = 0;
  init();
}
