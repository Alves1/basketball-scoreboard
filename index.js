let scoreHome = document.getElementById("score-home");
let scoreGuest = document.getElementById("score-guest");
let score_home = 0;
let score_guest = 0;

function add1_home() {
    score_home++;
    scoreHome.textContent = score_home;
}

function add2_home() {
    score_home += 2;
    scoreHome.textContent = score_home;
}

function add3_home() {
    score_home += 3;
    scoreHome.textContent = score_home;
}

function add1_guest() {
    score_guest++;
    scoreGuest.textContent = score_guest;
}

function add2_guest() {
    score_guest += 2;
    scoreGuest.textContent = score_guest;
}

function add3_guest() {
    score_guest += 3;
    scoreGuest.textContent = score_guest;
}

function resetScore() {
    score_home = 0;
    score_guest = 0;
    scoreHome.textContent = score_home;
    scoreGuest.textContent = score_guest;
}