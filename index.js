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
    answer: '2',
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
var btns = null
var index = 0

//creating button on screen
//if the user has never played the game before, the game should display a "start quiz" button

var startBtn = document.createElement('button')
document.body.appendChild(startBtn)
startBtn.setAttribute('id','start-quiz')
startBtn.textContent = "Start Quiz!"
//If the user has taken the quiz before, the app should display the previous score

//setting screen to 1st question when start button is clicked
startBtn.addEventListener('click', function(){
  gameStart=true
  document.body.removeChild(startBtn)
  //game container
  var gameContainer = document.createElement('div')
  document.body.appendChild(gameContainer)
  gameContainer.classList.add('quiz-example')

  //questionContainer
  var questionContainer = document.createElement('div')
  gameContainer.appendChild(questionContainer)

  //question 
  var question = document.createElement('p')
  questionContainer.appendChild(question)
  console.log(questionsArr[0].question)
  
  //options
  var optionsContainer = document.createElement('div')
  questionContainer.appendChild(optionsContainer)
  optionsContainer.setAttribute('id','quiz')
  var answer1 = document.createElement('button')
  var answer2 = document.createElement('button')
  var answer3 = document.createElement('button')
  var answer4 = document.createElement('button')
  optionsContainer.appendChild(answer1)
  optionsContainer.appendChild(answer2)
  optionsContainer.appendChild(answer3)
  optionsContainer.appendChild(answer4)

  //1st question
  question.textContent = questionsArr[0].question
  answer1.textContent = questionsArr[0].options[0]
  answer2.textContent = questionsArr[0].options[1]
  answer3.textContent = questionsArr[0].options[2]
  answer4.textContent = questionsArr[0].options[3]

  //getting all buttons (answer choice options)
  btns = document.querySelectorAll('#quiz > button')

  //checking when an answer button is clicked
  for(var i=0; i<btns.length;i++){
    //when an answer choice is picked...
    btns[i].addEventListener('click', function(){
      console.log("clickedButton: "+ this.textContent)
      //getting current index of button, need later for correct answer stuff
      var buttonIndex = Array.from(btns).indexOf(this)
      
      //if curr question index is NOT last question, change to next question
      if(index<questionsArr.length-1){
        //update text content to next question
        index++
        question.textContent = questionsArr[index].question
        answer1.textContent = questionsArr[index].options[0]
        answer2.textContent = questionsArr[index].options[1]
        answer3.textContent = questionsArr[index].options[2]
        answer4.textContent = questionsArr[index].options[3] 
      } else{
        //endgame functionality
        gameStart = false
        console.log("END GAME")
      }
    })
  }

})



  