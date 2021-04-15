// Dom Elements
const timeleftEl = document.querySelector('.countdown-timer')
const questionEl = document.getElementById('question')
const answerListEl = document.getElementById('answer-list')
const answerOneEL = document.querySelector('#answer-one')
const answerTwoEL = document.querySelector('#answer-two')
const answerThreeEL = document.querySelector('#answer-three')
const answerFourEL = document.querySelector('#answer-four')
const startBtnEl = document.querySelector('#start-btn')

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








// Start Game button
startBtnEl.addEventListener('click', e => {
    timerCountdown()
    startBtnEl.remove()
})

// answer event listeners
answerOneEL.addEventListener('click', e => {
    score++
    hello()
    console.log(score)
})

answerTwoEL.addEventListener('click', e => {
    score++
    hello()
    console.log(score)
})

answerThreeEL.addEventListener('click', e => {
    score++
    hello()
    console.log(score)
})

answerFourEL.addEventListener('click', e => {
    score++
    hello()
    console.log(score)
})  
