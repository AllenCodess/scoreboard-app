
let homeScore = 0
let homeScoreEl = document.querySelector(".home-score")
homeScoreEl.textContent = 0

let awayScore = 0
let awayScoreEl = document.querySelector(".away-score")
awayScoreEl.textContent = 0

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


// functions
function homeTouchdownScore () {
    homeScore += 6
    homeScoreEl.textContent = homeScore
}

function homeExtra () {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function FieldGoal () {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function awayTouchdownScore () {
    awayScore += 6
    awayScoreEl.textContent = awayScore
}

function awayExtra () {
    awayScore += 1
    awayScoreEl.textContent = awayScore
}

function awayFieldGoal () {
    awayScore += 3
    awayScoreEl.textContent = awayScore
}


