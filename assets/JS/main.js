// Dom Elements
const timeleftEl = document.querySelector('.countdown-timer')
const questionEl = document.getElementById('question')
const answerListEl = document.getElementById('answer-list')
const answerOneEL = document.querySelector('#answer-one')
const answerTwoEL = document.querySelector('#answer-two')
const answerThreeEL = document.querySelector('#answer-three')
const answerFourEL = document.querySelector('#answer-four')
const startBtnEl = document.querySelector('#start-btn')
const sectionEL = document.querySelector('#section')


// time and score count
let timeLeft = 60
let score = 0

function hello() {
    alert('howdy')
}

// countdown timer function
function timerCountdown() {
    var timeInterval = setInterval(function(){
    if (timeLeft >= 0) {
            timeleftEl.textContent = timeLeft
            timeLeft--
    }
    else {clearInterval(timeInterval)}        
    },
    1000)
}


var quiz =function() {
    var questionOne = document.createElement("div")
    questionOne.innerHTML = "this is a question?"
    document.getElementById('section').appendChild(questionOne)
}





// Start Game button
startBtnEl.addEventListener('click', e => {
    timerCountdown()
    startBtnEl.remove()
    questionEl.remove()
    quiz()
})

// answer event listeners
answerOneEL.addEventListener('click', e => {
    
})

answerTwoEL.addEventListener('click', e => {
    
})

answerThreeEL.addEventListener('click', e => {
    
})

answerFourEL.addEventListener('click', e => {
    
})  
