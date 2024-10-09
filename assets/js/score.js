console.log('score.js loaded');

const scoreElement = document.getElementById('score');
let score = scoreElement.innerText;

const updateScore = () => { 
    scoreElement.innerText = ++score;
}


window.updateGameScore = updateScore;