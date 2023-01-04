
var quizData= [
    {
    question: "Commonly used data types DO NOT include:",
    a: "Strings",
    b: "booleans",
    c: "alerts",
    d: "numbers",
    correct: "c",
  },
  {
    question: "The condition in an if / else statement is enclosed within _____.",
    a: "qoutes",
    b: "curly brackets",
    c: "parentheses",
    d: "square brackets",
    correct: "c",
  },
  {
    question: "Arrays in JavaScript can be used to store _____.",
    a: "numbers and strings",
    b: "other arrays",
    c: "booleans",
    d: "all of the above",
    correct: "d",
  },
  {
    question: "String values must be enclosed within _____ when being asssigned to variables.",
    a: "commas",
    b: "curly brackets",
    c: "quotes",
    d: "parentheses",
    correct: "b",
  },
  {
    question: "A very useful tool used during developing and debugging for printing content to debugger is:",
    a: "conosle.log",
    b: "Javascript",
    c: "terminal/bash",
    d: "for loops",
    correct: "a",
  },   
  ];

  var timer = document.querySelector("#time");
  var startBtn = document.querySelector("#start-btn");
  var quiz = document.getElementById('quiz');
  var answerEls = document.querySelectorAll('.answer');
  var questionEl = document.getElementById('question');
  var a_text = document.getElementById('a_text');
  var b_text = document.getElementById('b_text');
  var c_text = document.getElementById('c_text');
  var d_text = document.getElementById('d_text');
  var submitBtn = document.getElementById('submit');

  var currentTime = timer.textContent;

  var currentQuiz = 0
  var score = 0

  loadQuiz()

  function loadQuiz(){

        deselectAnswers()

        var currentQuizData = quizData[currentQuiz]

        questionEl.innerText = currentQuizData.question
        a_text.innerText = currentQuizData.a
        b_text.innerText = currentQuizData.b
        c_text.innerText = currentQuizData.c
        d_text.innerText = currentQuizData.d
  }

  function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)

  }

  function getSelected(){
    var answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
  }


submitBtn.addEventListener('click', () => {
    var answer = getSelected()
    if(answer){
        if (answer === quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length){
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h3>Your Score is: ${score}/${quizData.length} </h3>
            
            <button onclick = "location.reload()">Restart</button>
            `
        }

    }
    var timerStart = setInterval(function () {
        currentTime--;
        timer.textContent = currentTime;
        checkTime(timerStart);
      }, 1000);
  
     setInterval()
});


function checkTime(timerInterval) {
    if (questionEl == quizData.length) {
      clearInterval(timerInterval);
      endGame();
    } else if (currentTime <= 0) {
      timer.textContent = 0;
      currentTime = 0;
      clearInterval(timerInterval);
    }
}

loadQuiz()
