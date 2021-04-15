// Dom Elements
const timeleftEl = document.querySelector('.countdown-timer')
const questionEl = document.getElementById('question')
const answerListEl = document.getElementById('answer-list')
const answerEL = document.getElementsByClassName('answer')
const startBtnEl = document.querySelector('#start-btn')


// countdown timer function
function timerCountdown() {

    let timeLeft = 60

    var timeInterval = setInterval(function(){
        if (timeLeft >= 0) {
            timeleftEl.textContent = timeLeft
            timeLeft--
        }
        else {clearInterval(timeInterval)}
    },1000)}

// Start Game button
startBtnEl.addEventListener('click', timerCountdown)