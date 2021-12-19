// Variables We Need
var currentQuestion = 0;
var currentAnswer = "";
var currentScore = 0;

// Which Elements do we need from our HTML
var startPageContainer = document.getElementById("startpage");
var startQuizButton = document.getElementById("start-quiz");
var questionsContainer = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var questionsList = document.getElementById("options");
var nextButton = document.getElementById("next-button");

// Give our Start Quiz Button an onClick event
startQuizButton.addEventListener("click", function (event) {
  event.preventDefault();
  startPageContainer.setAttribute("class", "hidden");
  questionsContainer.removeAttribute("class");

  grabCurrentQuestion(currentQuestion);
});

function grabCurrentQuestion(currentIndex) {
  if (currentIndex < questions.length) {
    var currentQuestion = questions[currentIndex];
    console.log("currentQuestion", currentQuestion);

    questionTitle.textContent = currentQuestion.title;

    questionsList.innerHTML = "";
    currentQuestion.options.forEach(function (option, i) {
      var optionElement = document.createElement("button");

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
