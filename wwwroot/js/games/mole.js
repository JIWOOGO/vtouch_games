const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;

function randomTime(min, max) { 
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

  function peep() {
    const time = randomTime(1200, 1600);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) peep();
    }, time);
}

export function startGame() {
    scoreBoard.textContent = "SCORE : " + 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => timeUp = true, 15000)
}

function whack(e) {
    if(!e.isTrusted) return; 
    score++;
    var audio = new Audio('sounds/catch.mp3');
    //var audio = document.getElementById(audio_id);    
    audio.play();
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = "SCORE : " + score;
}

moles.forEach(mole => mole.addEventListener('mouseover', whack));