// Your code here
var questionsArr = [
  {
    question: 'Who was the Queen of Scotland and the queen consort of France?',
    answer: 'Mary Stuart',
    options: [
      'Margaret Tudor',
      'Mary Stuart',
      'Elizabeth I',
      'Marie de Guise',
    ]
  },
  {
    question: 'How many Stanley Cups have the Florida Panthers won?',
    answer: '2 cups',
    options: [
      '1 cup',
      '2 cups',
      '3 cups',
      '5 cups',
    ]
  },
  {
    question: 'What is the killer in the Scream movies called?',
    answer: 'Ghostface',
    options: [
      'The Phantom',
      'Woodsboro Slasher',
      'Father Stabber',
      'Ghostface',
    ]
  },
  {
    question: 'Where did the tradition of the Christmas tree originate?',
    answer: 'Germany',
    options: [
      'England',
      'France',
      'Germany',
      'Ireland',
    ]
  },
  {
    question: 'Where was Marie Antoinette born?',
    answer: 'Vienna, Austria',
    options: [
      'Versailles, France',
      'Paris, France',
      'Vienna, Austria',
      'Munich, Germany',
    ]
  },
]

var score = 0
var gameStart = false
var index = 0
var btns = null
var timerId = null
var quizContainer = document.querySelector('#quiz')
var question = document.createElement('p')
var optionsContainer = document.createElement('div')
var answer1 = document.createElement('button')
var answer2 = document.createElement('button')
var answer3 = document.createElement('button')
var answer4 = document.createElement('button')
var timerText = document.createElement('p')

//creating button on screen
//if the user has never played the game before, the game should display a "start quiz" button
if(localStorage.getItem('previous-score')){
  var previousScore = localStorage.getItem('previous-score')
  var scoreText = document.createElement('p')
  quizContainer.appendChild(scoreText)
  scoreText.textContent="Previous Score: "+ previousScore+"%"
}
var startBtn = document.createElement('button')
quizContainer.appendChild(startBtn)
startBtn.setAttribute('id','start-quiz')
startBtn.textContent = "Start Quiz!"
//If the user has taken the quiz before, the app should display the previous score

//setting screen to 1st question when start button is clicked
startBtn.addEventListener('click', function(){
  gameStart=true
  quizContainer.removeChild(startBtn)
  if(localStorage.getItem('previous-score')){
  quizContainer.removeChild(scoreText)}

  //question 
  quizContainer.appendChild(question)
  console.log(questionsArr[0].question)
  
  //options
  quizContainer.appendChild(optionsContainer)

  //1st question
  question.textContent = questionsArr[0].question
  answer1.textContent = questionsArr[0].options[0]
  answer2.textContent = questionsArr[0].options[1]
  answer3.textContent = questionsArr[0].options[2]
  answer4.textContent = questionsArr[0].options[3]

  //timer
  quizContainer.appendChild(timerText)
  startTimer(29)
})

//DON'T want this code to run everytime startButton is pressed
  optionsContainer.appendChild(answer1)
  optionsContainer.appendChild(answer2)
  optionsContainer.appendChild(answer3)
  optionsContainer.appendChild(answer4)

  //getting all buttons (answer choice options)
  btns = optionsContainer.querySelectorAll('button')

  //checking when an answer button is clicked
  for(var i=0; i<btns.length;i++){
    //when an answer choice is picked...
    btns[i].addEventListener('click', function(){
      console.log("clickedButton: "+ this.textContent)
      if(this.textContent === questionsArr[index].answer){
        score++
        console.log("score: "+ score)
      }
      //updates screen to next question
      nextQuestion()
    })
  }

//timer function (for each question)
function startTimer(seconds) {
  timerText.textContent = "30"
  clearInterval(timerId)
  timerId = setInterval(function(){ 
    if(seconds === 0){
      clearInterval(timerId)
      nextQuestion()
    }
    else{
     timerText.textContent = seconds
    }
    seconds--
  }, 1000)
}

function nextQuestion(){
  //if curr question index is NOT last question, change to next question
  if(index<questionsArr.length-1){
    //update text content to next question
    index++
    startTimer(29)
    question.textContent = questionsArr[index].question
    answer1.textContent = questionsArr[index].options[0]
    answer2.textContent = questionsArr[index].options[1]
    answer3.textContent = questionsArr[index].options[2]
    answer4.textContent = questionsArr[index].options[3] 
  } else{
    //endgame functionality
    clearInterval(timerId)
    gameStart = false
    console.log("END GAME")
    quizContainer.removeChild(question)
    quizContainer.removeChild(optionsContainer)
    quizContainer.removeChild(timerText)
    quizContainer.appendChild(scoreText)
    //updating score
    score = Math.round(((score/questionsArr.length)*100))
    localStorage.setItem('previous-score', score)
    scoreText.textContent="Previous Score: "+ score+"%"
    score=0
    index=0
    quizContainer.appendChild(startBtn)
  }
}