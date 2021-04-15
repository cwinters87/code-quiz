// Dom Elements
const timeleftEl = document.querySelector('.countdown-timer')
const startBtnEl = document.querySelector('#start-btn')
const sectionEL = document.querySelector('#section')


// time and score count
let timeLeft = 60
let score = 0


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
    questionOne.innerHTML = "this question is a question?"
    questionOne.id = "question"
    document.getElementById('section').appendChild(questionOne)

    var answerList = document.createElement("div")
    answerList.id = "answer-list"
    document.getElementById('section').appendChild(answerList)

    var answerOne = document.createElement("button")
    answerOne.innerHTML = "correct answer"
    answerOne.className = "answer"
    answerOne.id = "answer-one"
    document.getElementById('answer-list').appendChild(answerOne)

    var answerTwo = document.createElement("button")
    answerTwo.innerHTML = "incorrect answer"
    answerTwo.className = "answer"
    answerTwo.id = "answer-two"
    document.getElementById('answer-list').appendChild(answerTwo)

    var answerThree = document.createElement("button")
    answerThree.innerHTML = "incorrect answer"
    answerThree.className = "answer"
    answerThree.id = "answer-three"
    document.getElementById('answer-list').appendChild(answerThree)

    var answerFour = document.createElement("button")
    answerFour.innerHTML = "incorrect answer"
    answerFour.className = "answer"
    answerFour.id = "answer-four"
    document.getElementById('answer-list').appendChild(answerFour)

    answerOne.addEventListener("click", e => {
        score = score + 5
        console.log(score)
        section.remove()
        quizTwo()

    })

    answerTwo.addEventListener("click", e => {
        alert("incorrect...")
    })

    answerThree.addEventListener("click", e => {
        alert("incorrect...")
    })

    answerFour.addEventListener("click", e => {
        alert("incorrect...")
    })

}

//Question 2 function
var quizTwo =function() {

    var section = document.createElement('section')
    section.id = "section"
    document.getElementById('container').appendChild(section)

    var questionOne = document.createElement("div")
    questionOne.innerHTML = "this is your second question?"
    questionOne.id = "question"
    document.getElementById('section').appendChild(questionOne)

    var answerList = document.createElement("div")
    answerList.id = "answer-list"
    document.getElementById('section').appendChild(answerList)

    var answerOne = document.createElement("button")
    answerOne.innerHTML = "correct answer"
    answerOne.className = "answer"
    answerOne.id = "answer-one"
    document.getElementById('answer-list').appendChild(answerOne)

    var answerTwo = document.createElement("button")
    answerTwo.innerHTML = "incorrect answer"
    answerTwo.className = "answer"
    answerTwo.id = "answer-two"
    document.getElementById('answer-list').appendChild(answerTwo)

    var answerThree = document.createElement("button")
    answerThree.innerHTML = "incorrect answer"
    answerThree.className = "answer"
    answerThree.id = "answer-three"
    document.getElementById('answer-list').appendChild(answerThree)

    var answerFour = document.createElement("button")
    answerFour.innerHTML = "incorrect answer"
    answerFour.className = "answer"
    answerFour.id = "answer-four"
    document.getElementById('answer-list').appendChild(answerFour)

    answerOne.addEventListener("click", e => {
        score = score + 5
        console.log(score)
        section.remove()
        quizThree()

    })

    answerTwo.addEventListener("click", e => {
        alert("incorrect...")
    })

    answerThree.addEventListener("click", e => {
        alert("incorrect...")
    })

    answerFour.addEventListener("click", e => {
        alert("incorrect...")
    })

}

// Question 3 function
var quizThree =function() {

    var section = document.createElement('section')
    section.id = "section"
    document.getElementById('container').appendChild(section)

    var questionOne = document.createElement("div")
    questionOne.innerHTML = "this is your 3rd question?"
    questionOne.id = "question"
    document.getElementById('section').appendChild(questionOne)

    var answerList = document.createElement("div")
    answerList.id = "answer-list"
    document.getElementById('section').appendChild(answerList)

    var answerOne = document.createElement("button")
    answerOne.innerHTML = "correct answer"
    answerOne.className = "answer"
    answerOne.id = "answer-one"
    document.getElementById('answer-list').appendChild(answerOne)

    var answerTwo = document.createElement("button")
    answerTwo.innerHTML = "incorrect answer"
    answerTwo.className = "answer"
    answerTwo.id = "answer-two"
    document.getElementById('answer-list').appendChild(answerTwo)

    var answerThree = document.createElement("button")
    answerThree.innerHTML = "incorrect answer"
    answerThree.className = "answer"
    answerThree.id = "answer-three"
    document.getElementById('answer-list').appendChild(answerThree)

    var answerFour = document.createElement("button")
    answerFour.innerHTML = "incorrect answer"
    answerFour.className = "answer"
    answerFour.id = "answer-four"
    document.getElementById('answer-list').appendChild(answerFour)

    answerOne.addEventListener("click", e => {
        score = score + 5
        console.log(score)
        section.remove()
        quizFour()

    })

    answerTwo.addEventListener("click", e => {
        alert("incorrect...")
    })

    answerThree.addEventListener("click", e => {
        alert("incorrect...")
    })

    answerFour.addEventListener("click", e => {
        alert("incorrect...")
    })

}

// Question 4 function
var quizFour =function() {

    var section = document.createElement('section')
    section.id = "section"
    document.getElementById('container').appendChild(section)

    var questionOne = document.createElement("div")
    questionOne.innerHTML = "this is your fourth question?"
    questionOne.id = "question"
    document.getElementById('section').appendChild(questionOne)

    var answerList = document.createElement("div")
    answerList.id = "answer-list"
    document.getElementById('section').appendChild(answerList)

    var answerOne = document.createElement("button")
    answerOne.innerHTML = "correct answer"
    answerOne.className = "answer"
    answerOne.id = "answer-one"
    document.getElementById('answer-list').appendChild(answerOne)

    var answerTwo = document.createElement("button")
    answerTwo.innerHTML = "incorrect answer"
    answerTwo.className = "answer"
    answerTwo.id = "answer-two"
    document.getElementById('answer-list').appendChild(answerTwo)

    var answerThree = document.createElement("button")
    answerThree.innerHTML = "incorrect answer"
    answerThree.className = "answer"
    answerThree.id = "answer-three"
    document.getElementById('answer-list').appendChild(answerThree)

    var answerFour = document.createElement("button")
    answerFour.innerHTML = "incorrect answer"
    answerFour.className = "answer"
    answerFour.id = "answer-four"
    document.getElementById('answer-list').appendChild(answerFour)

    answerOne.addEventListener("click", e => {
        score = score + 5
        console.log(score)
        section.remove()
        quizFive()

    })

    answerTwo.addEventListener("click", e => {
        alert("incorrect...")
    })

    answerThree.addEventListener("click", e => {
        alert("incorrect...")
    })

    answerFour.addEventListener("click", e => {
        alert("incorrect...")
    })

}


//Question 5 function
var quizFive =function() {

    var section = document.createElement('section')
    section.id = "section"
    document.getElementById('container').appendChild(section)

    var questionOne = document.createElement("div")
    questionOne.innerHTML = "this is your last question?"
    questionOne.id = "question"
    document.getElementById('section').appendChild(questionOne)

    var answerList = document.createElement("div")
    answerList.id = "answer-list"
    document.getElementById('section').appendChild(answerList)

    var answerOne = document.createElement("button")
    answerOne.innerHTML = "correct answer"
    answerOne.className = "answer"
    answerOne.id = "answer-one"
    document.getElementById('answer-list').appendChild(answerOne)

    var answerTwo = document.createElement("button")
    answerTwo.innerHTML = "incorrect answer"
    answerTwo.className = "answer"
    answerTwo.id = "answer-two"
    document.getElementById('answer-list').appendChild(answerTwo)

    var answerThree = document.createElement("button")
    answerThree.innerHTML = "incorrect answer"
    answerThree.className = "answer"
    answerThree.id = "answer-three"
    document.getElementById('answer-list').appendChild(answerThree)

    var answerFour = document.createElement("button")
    answerFour.innerHTML = "incorrect answer"
    answerFour.className = "answer"
    answerFour.id = "answer-four"
    document.getElementById('answer-list').appendChild(answerFour)

    answerOne.addEventListener("click", e => {
        score = score + 5
        console.log(score)
        section.remove()
        alert('game over')

    })

    answerTwo.addEventListener("click", e => {
        alert("incorrect...")
    })

    answerThree.addEventListener("click", e => {
        alert("incorrect...")
    })

    answerFour.addEventListener("click", e => {
        alert("incorrect...")
    })

}








// Start Game button
startBtnEl.addEventListener('click', e => {
    timerCountdown()
    startBtnEl.remove()
    sectionEL.remove()
    quizOne()
})

