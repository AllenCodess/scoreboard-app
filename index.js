
let homeScore = 0
let homeScoreEl = document.querySelector(".home-score")
homeScoreEl.textContent = 0

let awayScore = 0
let awayScoreEl = document.querySelector(".away-score")
awayScoreEl.textContent = 0

const winnerMessage = document.querySelector("#winner-message")
const resetBtn = document.querySelector("#reset")

const awayTouchdownEl = document.querySelector("#away-touchdown")
const awayExtraEl = document.querySelector("#away-extra")
const awayFgEl = document.querySelector("#away-fg")

const homeTouchdownEl = document.querySelector("#home-touchdown")
const homeExtraEl = document.querySelector("#home-extra")
const homeFgEl = document.querySelector("#home-fg")

// event listeners
awayTouchdownEl.addEventListener("click", awayTouchdownScore)
awayExtraEl.addEventListener("click", awayExtra)
awayFgEl.addEventListener("click", awayFieldGoal)

homeTouchdownEl.addEventListener("click", homeTouchdownScore)
homeExtraEl.addEventListener("click", homeExtra)
homeFgEl.addEventListener("click", FieldGoal)

resetBtn.addEventListener("click", resetGame)

function resetGame () {
    homeScore = 0
    awayScore = 0
    homeScoreEl.textContent = homeScore
    awayScoreEl.textContent = awayScore
    winnerMessage.textContent = ""
    resetBtn.style.display = "none"
}


function winnerMessages () {
    if (homeScore >= 42) {
        winnerMessage.textContent = "Home Team Wins!!!!"
        resetBtn.style.display = "block"
    } else if (awayScore >= 42) {
        winnerMessage.textContent = "Away Team Wins!!!"
        resetBtn.style.display= "block"
    }
}


// functions
function homeTouchdownScore () {
    homeScore += 6
    homeScoreEl.textContent = homeScore
    winnerMessages()
}

function homeExtra () {
    homeScore += 1
    homeScoreEl.textContent = homeScore
    winnerMessages()
}

function FieldGoal () {
    homeScore += 3
    homeScoreEl.textContent = homeScore
    winnerMessages()
}

function awayTouchdownScore () {
    awayScore += 6
    awayScoreEl.textContent = awayScore
    winnerMessages()
}

function awayExtra () {
    awayScore += 1
    awayScoreEl.textContent = awayScore
    winnerMessages()
}

function awayFieldGoal () {
    awayScore += 3
    awayScoreEl.textContent = awayScore
    winnerMessages()
}


