window.addEventListener('load', init)
//glob
let time = 10;
let isPlaying = true;
let score = 0;

const currentWord = document.querySelector('#current_word');
const timeDisplay = document.querySelector('#time');
const scoreDisplay = document.querySelector('#score');
const messsage = document.querySelector('#message');
const wordInput = document.querySelector('#word-input');

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'master',
    'space',
    'definition',
    'magic'
];

function init() {
    showWord(words);
    wordInput.addEventListener('input', startMatch);
    setInterval(countdown, 1000);
    setInterval(checkStatus, 50);
}

function startMatch() {
    if (matchWords()) {
        isPlaying = true;
        refresh();
    }
    scoreDisplay.innerHTML = score;
}

function refresh() {
    showWord(words);
    score++;
    time = 10;
    wordInput.value = '';
    scoreDisplay.innerHTML = score;
    if (score === -1){
        scoreDisplay.innerHTML = 0;
    }else{
        scoreDisplay.innerHTML = score;
    }
}

function matchWords() {
    if (wordInput.value === currentWord.innerHTML) {
        messsage.innerHTML = '<span style="color:green ; font-size:40px"> Correct ! </span>'
        return true;
    } else {
        messsage.innerHTML = '';
        return false
    }
}

function showWord(words) {
    const randIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randIndex];
}

function countdown() {
    if (time > 0) {
        time--;
    } else if (time === 0) {
        isPlaying = false;
    }
    timeDisplay.innerHTML = time;
}

function checkStatus() {
    if (!isPlaying && time === 0) {
        messsage.innerHTML = 'Game Over'
        score = -1;
    }
}