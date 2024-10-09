console.log('timer.js has loaded');


const secondsOutput = document.getElementById('seconds');
const minutesOutput = document.getElementById('minutes');

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId; 
let mins = 0;
let secs = 0;

const startGameTimer = () => {
  if( paused ){ 
    paused = false; 
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTime, 1000)
  }
}

const pauseGameTimer = () => { 
  if (!paused) {
    paused = true; 
    elapsedTime = Date.now() - startTime; 
    clearInterval(intervalId);
  }
}

const resetGameTimer = () => { 
  paused = true; 
  clearInterval(intervalId);
  startTime = 0;
  elapsedTime = 0;
  currentTime = 0;
  mins = 0;
  secs = 0;
  minutesOutput.innerText = "00";
  secondsOutput.innerText = "00";
}

const updateTime = () => { 
  elapsedTime = Date.now() - startTime; 
  secs = padding(Math.floor((elapsedTime / 1000) % 60));
  mins = padding(Math.floor((elapsedTime / (1000 * 60)) % 60));

  secondsOutput.innerText = secs;
  minutesOutput.innerText = mins;
  
}

const padding = (val) => {
  return (("0") + val).length > 2 ? val : "0" + val;
}

window.startGameTimer = startGameTimer;
window.pauseGameTimer = pauseGameTimer;
window.resetGameTimer = resetGameTimer;