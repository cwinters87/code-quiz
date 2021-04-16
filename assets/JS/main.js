// Dom Elements
const timeleftEl = document.querySelector('.countdown-timer')
const startBtnEl = document.querySelector('#start-btn')
const sectionEL = document.querySelector('#section')


// time and score count
let timeLeft = 60
let score = 0
let rightOrWrong = ""


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
    answerOne.id = "answer-one"
    document.getElementById('answer-list').appendChild(answerOne)

    var answerTwo = document.createElement("button")
    answerTwo.innerHTML = "2. booleans"
    answerTwo.className = "answer"
    answerTwo.id = "answer-two"
    document.getElementById('answer-list').appendChild(answerTwo)

    var answerThree = document.createElement("button")
    answerThree.innerHTML = "3. alerts"
    answerThree.className = "answer"
    answerThree.id = "answer-three"
    document.getElementById('answer-list').appendChild(answerThree)

    var answerFour = document.createElement("button")
    answerFour.innerHTML = "4. numbers"
    answerFour.className = "answer"
    answerFour.id = "answer-four"
    document.getElementById('answer-list').appendChild(answerFour)

    //Answer clicks...

    //wrong
    answerOne.addEventListener("click", e => {
        rightOrWrong = "Wrong!"
        section.remove()
        quizTwo()
    })

    //wrong
    answerTwo.addEventListener("click", e => {
        rightOrWrong = "Wrong!"
        section.remove()
        quizTwo()
    })

    //right
    answerThree.addEventListener("click", e => {
        score = score + 5
        rightOrWrong = "right!"
        section.remove()
        quizTwo()
    })

    //wrong
    answerFour.addEventListener("click", e => {
        rightOrWrong = "Wrong!"
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
    answerOne.id = "answer-one"
    document.getElementById('answer-list').appendChild(answerOne)

    var answerTwo = document.createElement("button")
    answerTwo.innerHTML = "2. curly brackets"
    answerTwo.className = "answer"
    answerTwo.id = "answer-two"
    document.getElementById('answer-list').appendChild(answerTwo)

    var answerThree = document.createElement("button")
    answerThree.innerHTML = "3. parenthesis"
    answerThree.className = "answer"
    answerThree.id = "answer-three"
    document.getElementById('answer-list').appendChild(answerThree)

    var answerFour = document.createElement("button")
    answerFour.innerHTML = "4. square brackets"
    answerFour.className = "answer"
    answerFour.id = "answer-four"
    document.getElementById('answer-list').appendChild(answerFour)

    answerOne.addEventListener("click", e => {
        rightOrWrong = "Wrong!"
        section.remove()
        quizThree()
    })

    // Answer clicks

    //wrong
    answerTwo.addEventListener("click", e => {
        rightOrWrong = "Wrong!"
        section.remove()
        quizThree()
    })

    //right
    answerThree.addEventListener("click", e => {
        score = score + 5
        rightOrWrong = "Right!"
        section.remove()
        quizThree()
    })

    //wrong
    answerFour.addEventListener("click", e => {
        rightOrWrong = "Wrong!"
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
    answerOne.id = "answer-one"
    document.getElementById('answer-list').appendChild(answerOne)

    var answerTwo = document.createElement("button")
    answerTwo.innerHTML = "2. other arrays"
    answerTwo.className = "answer"
    answerTwo.id = "answer-two"
    document.getElementById('answer-list').appendChild(answerTwo)

    var answerThree = document.createElement("button")
    answerThree.innerHTML = "3. booleans"
    answerThree.className = "answer"
    answerThree.id = "answer-three"
    document.getElementById('answer-list').appendChild(answerThree)

    var answerFour = document.createElement("button")
    answerFour.innerHTML = "4. all of the above"
    answerFour.className = "answer"
    answerFour.id = "answer-four"
    document.getElementById('answer-list').appendChild(answerFour)

    //Answer Clicks...

    //wrong
    answerOne.addEventListener("click", e => {
        rightOrWrong = "Wrong!"
        section.remove()
        quizFour()
    })

    //wrong
    answerTwo.addEventListener("click", e => {
        rightOrWrong = "Wrong!"
        section.remove()
        quizFour()
    })

    //wrong
    answerThree.addEventListener("click", e => {
        rightOrWrong = "Wrong!"
        section.remove()
        quizFour()
    })

    //right
    answerFour.addEventListener("click", e => {
        score = score + 5
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
    answerOne.id = "answer-one"
    document.getElementById('answer-list').appendChild(answerOne)

    var answerTwo = document.createElement("button")
    answerTwo.innerHTML = "2. curley brackets"
    answerTwo.className = "answer"
    answerTwo.id = "answer-two"
    document.getElementById('answer-list').appendChild(answerTwo)

    var answerThree = document.createElement("button")
    answerThree.innerHTML = "3. quotes"
    answerThree.className = "answer"
    answerThree.id = "answer-three"
    document.getElementById('answer-list').appendChild(answerThree)

    var answerFour = document.createElement("button")
    answerFour.innerHTML = "4. parenthesis"
    answerFour.className = "answer"
    answerFour.id = "answer-four"
    document.getElementById('answer-list').appendChild(answerFour)


    // Answer Clicks...

    //wrong
    answerOne.addEventListener("click", e => {
        rightOrWrong = "Wrong!"
        section.remove()
        quizFive()
    })


    //wrong
    answerTwo.addEventListener("click", e => {
        rightOrWrong = "Wrong!"
        section.remove()
        quizFive()
    })


    //right
    answerThree.addEventListener("click", e => {
        score = score + 5
        rightOrWrong = "Right!"
        section.remove()
        quizFive()
    })

    //wrong
    answerFour.addEventListener("click", e => {
        rightOrWrong = "Wrong!"
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
    answerOne.id = "answer-one"
    document.getElementById('answer-list').appendChild(answerOne)

    var answerTwo = document.createElement("button")
    answerTwo.innerHTML = "2. terminal/bash"
    answerTwo.className = "answer"
    answerTwo.id = "answer-two"
    document.getElementById('answer-list').appendChild(answerTwo)

    var answerThree = document.createElement("button")
    answerThree.innerHTML = "3. for loops"
    answerThree.className = "answer"
    answerThree.id = "answer-three"
    document.getElementById('answer-list').appendChild(answerThree)

    var answerFour = document.createElement("button")
    answerFour.innerHTML = "4. console.log"
    answerFour.className = "answer"
    answerFour.id = "answer-four"
    document.getElementById('answer-list').appendChild(answerFour)


    // Answer Clicks...

    //wrong
    answerOne.addEventListener("click", e => {
        rightOrWrong = "Wrong!"
        section.remove()
        gameOver()
    })

    //wrong
    answerTwo.addEventListener("click", e => {
        rightOrWrong = "Wrong!"
        section.remove()
        gameOver()
    })

    //wrong
    answerThree.addEventListener("click", e => {
        rightOrWrong = "Wrong!"
        section.remove()
        gameOver()
    })

    //right
    answerFour.addEventListener("click", e => {
        score = score + 5
        rightOrWrong = "Right!"        
        section.remove()
        gameOver()
    })

}

// Game over function
var gameOver = function(){
    alert('game over')
    console.log(score)
}






// Start Game button
startBtnEl.addEventListener('click', e => {
    timerCountdown()
    startBtnEl.remove()
    sectionEL.remove()
    quizOne()
})

