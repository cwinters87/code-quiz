// Dom Elements
const timeleftEl = document.querySelector('.countdown-timer')
const startBtnEl = document.querySelector('#start-btn')
const sectionEL = document.querySelector('#section')
const mainEl = document.getElementById('container')


// time and score count
let timeLeft = 75
let initials = ""
let rightOrWrong = ""

// countdown timer function

timeObj = {
    time: function timerCountdown() {
        var timeInterval = setInterval(function(){
        if (timeLeft >= 0) {
            timeleftEl.textContent = timeLeft
            timeLeft--} 
        else {
            clearInterval(timeInterval)}        
        },1000)}
    }

//Question 1 Fucntion
var quizOne =function() {

    var section = document.createElement('section')
    section.id = "section"
    document.getElementById('container').appendChild(section)

    var questionOne = document.createElement("div")
    questionOne.innerHTML = "Commonly used data types DO Not include:"
    questionOne.id = "question"
    document.getElementById('section').appendChild(questionOne)

    var answerList = document.createElement("div")
    answerList.id = "answer-list"
    document.getElementById('section').appendChild(answerList)

    var answerOne = document.createElement("button")
    answerOne.innerHTML = "1. strings"
    answerOne.className = "answer"
    document.getElementById('answer-list').appendChild(answerOne)

    var answerTwo = document.createElement("button")
    answerTwo.innerHTML = "2. booleans"
    answerTwo.className = "answer"
    document.getElementById('answer-list').appendChild(answerTwo)

    var answerThree = document.createElement("button")
    answerThree.innerHTML = "3. alerts"
    answerThree.className = "answer"
    document.getElementById('answer-list').appendChild(answerThree)

    var answerFour = document.createElement("button")
    answerFour.innerHTML = "4. numbers"
    answerFour.className = "answer"
    document.getElementById('answer-list').appendChild(answerFour)

    //Answer clicks...

    //wrong
    answerOne.addEventListener("click", e => {
        rightOrWrong = "Wrong!"
        timeLeft = timeLeft - 10
        section.remove()
        quizTwo()
    })

    //wrong
    answerTwo.addEventListener("click", e => {
        rightOrWrong = "Wrong!"
        timeLeft = timeLeft - 10
        section.remove()
        quizTwo()
    })

    //right
    answerThree.addEventListener("click", e => {
        rightOrWrong = "right!"
        section.remove()
        quizTwo()
    })

    //wrong
    answerFour.addEventListener("click", e => {
        rightOrWrong = "Wrong!"
        timeLeft = timeLeft - 10
        section.remove()
        quizTwo()
    })
}



//Question 2 function
var quizTwo =function() {

    var section = document.createElement('section')
    section.id = "section"
    document.getElementById('container').appendChild(section)

    var questionOne = document.createElement("div")
    questionOne.innerHTML = "The condition in an if / else statement is enclosed with ________."
    questionOne.id = "question"
    document.getElementById('section').appendChild(questionOne)

    var answerList = document.createElement("div")
    answerList.id = "answer-list"
    document.getElementById('section').appendChild(answerList)

    var bottom = document.createElement("div")
    bottom.innerHTML = rightOrWrong
    bottom.id = "bottom"
    document.getElementById('section').appendChild(bottom)

    var answerOne = document.createElement("button")
    answerOne.innerHTML = "1. quotes"
    answerOne.className = "answer"
    document.getElementById('answer-list').appendChild(answerOne)

    var answerTwo = document.createElement("button")
    answerTwo.innerHTML = "2. curly brackets"
    answerTwo.className = "answer"
    document.getElementById('answer-list').appendChild(answerTwo)

    var answerThree = document.createElement("button")
    answerThree.innerHTML = "3. parenthesis"
    answerThree.className = "answer"
    document.getElementById('answer-list').appendChild(answerThree)

    var answerFour = document.createElement("button")
    answerFour.innerHTML = "4. square brackets"
    answerFour.className = "answer"
    document.getElementById('answer-list').appendChild(answerFour)

    // Answer clicks

    //wrong
    answerOne.addEventListener("click", e => {
        rightOrWrong = "Wrong!"
        timeLeft = timeLeft - 10
        section.remove()
        quizThree()
    })

    // Answer clicks

    //wrong
    answerTwo.addEventListener("click", e => {
        rightOrWrong = "Wrong!"
        timeLeft = timeLeft - 10
        section.remove()
        quizThree()
    })

    //right
    answerThree.addEventListener("click", e => {
        rightOrWrong = "Right!"
        section.remove()
        quizThree()
    })

    //wrong
    answerFour.addEventListener("click", e => {
        rightOrWrong = "Wrong!"
        timeLeft = timeLeft - 10
        section.remove()
        quizThree()
    })
}

// Question 3 function
var quizThree =function() {

    var section = document.createElement('section')
    section.id = "section"
    document.getElementById('container').appendChild(section)

    var questionOne = document.createElement("div")
    questionOne.innerHTML = "Arrays in JavaScript can be used to store _____."
    questionOne.id = "question"
    document.getElementById('section').appendChild(questionOne)

    var answerList = document.createElement("div")
    answerList.id = "answer-list"
    document.getElementById('section').appendChild(answerList)

    var bottom = document.createElement("div")
    bottom.innerHTML = rightOrWrong
    bottom.id = "bottom"
    document.getElementById('section').appendChild(bottom)

    var answerOne = document.createElement("button")
    answerOne.innerHTML = "1. numbers and strings"
    answerOne.className = "answer"
    document.getElementById('answer-list').appendChild(answerOne)

    var answerTwo = document.createElement("button")
    answerTwo.innerHTML = "2. other arrays"
    answerTwo.className = "answer"
    document.getElementById('answer-list').appendChild(answerTwo)

    var answerThree = document.createElement("button")
    answerThree.innerHTML = "3. booleans"
    answerThree.className = "answer"
    document.getElementById('answer-list').appendChild(answerThree)

    var answerFour = document.createElement("button")
    answerFour.innerHTML = "4. all of the above"
    answerFour.className = "answer"
    document.getElementById('answer-list').appendChild(answerFour)

    //Answer Clicks...

    //wrong
    answerOne.addEventListener("click", e => {
        rightOrWrong = "Wrong!"
        timeLeft = timeLeft - 10
        section.remove()
        quizFour()
    })

    //wrong
    answerTwo.addEventListener("click", e => {
        rightOrWrong = "Wrong!"
        timeLeft = timeLeft - 10
        section.remove()
        quizFour()
    })

    //wrong
    answerThree.addEventListener("click", e => {
        rightOrWrong = "Wrong!"
        timeLeft = timeLeft - 10
        section.remove()
        quizFour()
    })

    //right
    answerFour.addEventListener("click", e => {
        rightOrWrong = "Right!"
        section.remove()
        quizFour()
    })
}

// Question 4 function
var quizFour =function() {

    var section = document.createElement('section')
    section.id = "section"
    document.getElementById('container').appendChild(section)

    var questionOne = document.createElement("div")
    questionOne.innerHTML = "String values must be enclosed within ____ when being assigned to variables."
    questionOne.id = "question"
    document.getElementById('section').appendChild(questionOne)

    var answerList = document.createElement("div")
    answerList.id = "answer-list"
    document.getElementById('section').appendChild(answerList)

    var bottom = document.createElement("div")
    bottom.innerHTML = rightOrWrong
    bottom.id = "bottom"
    document.getElementById('section').appendChild(bottom)

    var answerOne = document.createElement("button")
    answerOne.innerHTML = "1. commas"
    answerOne.className = "answer"
    document.getElementById('answer-list').appendChild(answerOne)

    var answerTwo = document.createElement("button")
    answerTwo.innerHTML = "2. curley brackets"
    answerTwo.className = "answer"
    document.getElementById('answer-list').appendChild(answerTwo)

    var answerThree = document.createElement("button")
    answerThree.innerHTML = "3. quotes"
    answerThree.className = "answer"
    document.getElementById('answer-list').appendChild(answerThree)

    var answerFour = document.createElement("button")
    answerFour.innerHTML = "4. parenthesis"
    answerFour.className = "answer"
    document.getElementById('answer-list').appendChild(answerFour)

    // Answer Clicks...

    //wrong
    answerOne.addEventListener("click", e => {
        rightOrWrong = "Wrong!"
        timeLeft = timeLeft - 10
        section.remove()
        quizFive()
    })


    //wrong
    answerTwo.addEventListener("click", e => {
        rightOrWrong = "Wrong!"
        timeLeft = timeLeft - 10
        section.remove()
        quizFive()
    })


    //right
    answerThree.addEventListener("click", e => {
        rightOrWrong = "Right!"
        section.remove()
        quizFive()
    })

    //wrong
    answerFour.addEventListener("click", e => {
        rightOrWrong = "Wrong!"
        timeLeft = timeLeft - 10
        section.remove()
        quizFive()
    })

}


//Question 5 function
var quizFive =function() {

    var section = document.createElement('section')
    section.id = "section"
    document.getElementById('container').appendChild(section)

    var questionOne = document.createElement("div")
    questionOne.innerHTML = "A very useful tool used during development and debugging for printing content to the debugger is:"
    questionOne.id = "question"
    document.getElementById('section').appendChild(questionOne)

    var answerList = document.createElement("div")
    answerList.id = "answer-list"
    document.getElementById('section').appendChild(answerList)

    var bottom = document.createElement("div")
    bottom.innerHTML = rightOrWrong
    bottom.id = "bottom"
    document.getElementById('section').appendChild(bottom)

    var answerOne = document.createElement("button")
    answerOne.innerHTML = "1. JavaScript"
    answerOne.className = "answer"
    document.getElementById('answer-list').appendChild(answerOne)

    var answerTwo = document.createElement("button")
    answerTwo.innerHTML = "2. terminal/bash"
    answerTwo.className = "answer"
    document.getElementById('answer-list').appendChild(answerTwo)

    var answerThree = document.createElement("button")
    answerThree.innerHTML = "3. for loops"
    answerThree.className = "answer"
    document.getElementById('answer-list').appendChild(answerThree)

    var answerFour = document.createElement("button")
    answerFour.innerHTML = "4. console.log"
    answerFour.className = "answer"
    document.getElementById('answer-list').appendChild(answerFour)


    // Answer Clicks...

    //wrong
    answerOne.addEventListener("click", e => {
        rightOrWrong = "Wrong!"
        timeLeft = timeLeft - 10
        section.remove()
        gameOver()
    })

    //wrong
    answerTwo.addEventListener("click", e => {
        rightOrWrong = "Wrong!"
        timeLeft = timeLeft - 10
        section.remove()
        gameOver()
    })

    //wrong
    answerThree.addEventListener("click", e => {
        rightOrWrong = "Wrong!"
        timeLeft = timeLeft - 10
        section.remove()
        gameOver()
    })

    //right
    answerFour.addEventListener("click", e => {
        rightOrWrong = "Right!"        
        section.remove()
        gameOver()
    })
}

// Game over function
const gameOver = function(){ 

    timeLeft = timeLeft + 1
    var finalTime = timeLeft
    var score = finalTime.toString()

    var section = document.createElement('section')
    section.id = "section"
    document.getElementById('container').appendChild(section)

    var allDone = document.createElement("div")
    allDone.innerHTML = "All done!"
    allDone.id = "question"
    document.getElementById('section').appendChild(allDone)

    var answerList = document.createElement("div")
    answerList.id = "answer-list"
    document.getElementById('section').appendChild(answerList)

    var scoreEl = document.createElement("div")
    scoreEl.innerHTML = "Your final score is " + timeLeft + "."
    scoreEl.className = "final-score-item"
    scoreEl.id = "final-score"
    document.getElementById('answer-list').appendChild(scoreEl)

    var divOfThree = document.createElement("div")    
    divOfThree.id = "div-of-three"
    document.getElementById('answer-list').appendChild(divOfThree)

    var enterInitialsEl = document.createElement("div")
    enterInitialsEl.innerHTML = "Enter intials:"
    enterInitialsEl.className = "input-score"
    enterInitialsEl.id = "enter-initials"
    document.getElementById('div-of-three').appendChild(enterInitialsEl)

    var inputEl = document.createElement("input")
    inputEl.type = "text"  
    inputEl.className = "input-score"
    inputEl.maxLength = "3"
    inputEl.id = "input-text"
    document.getElementById('div-of-three').appendChild(inputEl)

    var inputBtnEl = document.createElement("button")
    inputBtnEl.type = "button"
    inputBtnEl.innerHTML = "Submit"
    inputBtnEl.className = "input-score"
    inputBtnEl.id = "input-btn"
    document.getElementById('div-of-three').appendChild(inputBtnEl)      

    var bottom = document.createElement("div")
    bottom.innerHTML = rightOrWrong
    bottom.id = "bottom"
    document.getElementById('section').appendChild(bottom)

    inputBtnEl.addEventListener('click', e=> {
        initials = document.getElementById('input-text').value
        localStorage.setItem(initials, score)
        section.remove()
        highScores()      
    })    
}

const highScores = function(){

    var section = document.createElement('section')
    section.id = "section"
    document.getElementById('container').appendChild(section)

    var titleEl = document.createElement("div")
    titleEl.innerHTML = "High Scores!"
    titleEl.id = "question"
    document.getElementById('section').appendChild(titleEl)

    var listEl = document.createElement("div")
    listEl.id = "score-list"
    document.getElementById('section').appendChild(listEl)

    var scoresEl = document.createElement("P")
    scoresEl.innerHTML = "list of high scores"
    scoresEl.id = "high-score"
    document.getElementById('score-list').appendChild(scoresEl)

    var buttonDiv = document.createElement("div")
    buttonDiv.id = "button-div"
    document.getElementById('section').appendChild(buttonDiv)

    var goBack = document.createElement("button")
    goBack.innerHTML = "Go Back"
    goBack.className = "score-button"
    document.getElementById('button-div').appendChild(goBack)

    var clearHighScores = document.createElement("button")
    clearHighScores.innerHTML = "Clear High Scores"
    clearHighScores.className = "score-button"
    document.getElementById('button-div').appendChild(clearHighScores)

}






// Start Game button
startBtnEl.addEventListener('click', e => {
    timeObj.time()
    startBtnEl.remove()
    sectionEL.remove()
    quizOne()
})