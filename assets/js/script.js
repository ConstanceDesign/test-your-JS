// Variables We Need
var currentQuestion = 0;
var currentAnswer = "";
var currentScore = 0;
var timerId;

// Which Elements do we need from our HTML
var startPageContainer = document.getElementById("startpage");
var startQuizButton = document.getElementById("start-quiz");
var questionsContainer = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var questionsList = document.getElementById("options-list");
var timerEl = document.getElementById("timerEl");

// Give our Start Quiz Button an onClick event
startQuizButton.addEventListener("click", function (event) {
  event.preventDefault();
  startPageContainer.setAttribute("class", "hidden");
  questionsContainer.removeAttribute("class");
  timerId = setInterval(countdown, 1000);
  timerEl.textContent = timer;
  grabCurrentQuestion(currentQuestion);
});

function grabCurrentQuestion(currentIndex) {
  if (currentIndex < questions.length) {
    var currentQuestion = questions[currentIndex];
    console.log("currentQuestion", currentQuestion);

    questionTitle.textContent = currentQuestion.title;

    questionsList.innerHTML = "";
    currentQuestion.options.forEach(function (option, i) {
      var optionElement = document.createElement("li");

      optionElement.setAttribute("value", option);

      optionElement.textContent = option;

      optionElement.addEventListener("click", function (event) {
        var isAnswerCorrect = checkAnswer(
          event.target.value,
          currentQuestion.answer
        );

        if (isAnswerCorrect === true) {
          currentScore = currentScore + 1;
        }

        currentIndex = currentIndex + 1;

        console.log("currentScore", currentScore);

        grabCurrentQuestion(currentIndex);
      });

      questionsList.appendChild(optionElement);
    });
  }
}

function checkAnswer(usersChoice, answer) {
  if (usersChoice === answer) {
    return true;
  } else {
    return false;
  }
}

//Timer
function countdown() {
  timer--;
  timerEl.textContent = timer;
}

var timer = 60;
var counter = 0;
var currentScore = 0;
var intro = document.getElementById("IntroContainer");
var game = document.getElementById("GameContainer");
console.log("loadIt");

function StartGame() {
  console.log("buttonClicked");
  into.classList.add("Hide");
  Game.classList.remove("Hide");
}
document.getElementById("StartButton").addEventListener("click", StartGame);
