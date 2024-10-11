console.log('score.js loaded');

const scoreElement = document.getElementById('score');
let score = scoreElement.innerText;

const updateScore = () => { 
    scoreElement.innerText = ++score;
}

const clearScore = () => { 
    scoreElement.innerText = 0;
}

window.updateGameScore = updateScore;
window.clearScore = clearScore;