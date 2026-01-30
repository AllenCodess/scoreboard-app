// created variables of selected elements
// event listeners
// functions

// home
let homeScore = 0
let homeScoreEl = document.querySelector(".home-score")
homeScoreEl.textContent = 0

const homeTouchdownEl = document.querySelector("#home-touchdown")
const homeExtraEl = document.querySelector("#home-extra")
const homeFgEl = document.querySelector("#home-fg")


homeTouchdownEl.addEventListener("click", homeTouchdownScore)
homeExtraEl.addEventListener("click", homeExtra)
homeFgEl.addEventListener("click", FieldGoal)



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




