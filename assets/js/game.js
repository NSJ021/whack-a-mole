console.log('Game.js Running');

let isPaused = false;

const audio = document.getElementById('background_Audio');

/**
 * Play Game Function: Controls what happens when the play button is pressed
 */
window.playGame = () => {
    console.log('Play Button Pressed');
    isPaused = !isPaused; // Toggle the pause state
    let playBtn = document.getElementById('play_Image');
    if (!isPaused) {
        console.log('pausing the game');
        window.pauseGameTimer();
        window.deactivatePlumbers(); 
        playBtn.setAttribute('src', './assets/images/play-unpressed.png');
        clearInterval(window.intervalId); // Stop the interval when paused
        audio.pause();        
    } else {
        // Restart the interval only if it's not already running
        // startGame();
        console.log('starting the game');
        playBtn.setAttribute('src', './assets/images/pause-unpressed.png');
        window.startGameTimer();
        window.activatePlumbers();
        window.intervalId = setInterval(showRandomPlumber, 1000); // Restart the interval
        audio.play();
    }
}

/**
 * Restart Game Function: Controls what happens when the Restart button is pressed
 */
window.resetGame = () => {
    console.log('Restart Pressed');
    window.resetGameTimer();
    window.hideAllPlumbers();
    window.clearScore();
}

/**
 * Settings Function: Controls what happens when the settings button is pressed
 */
window.settings = () => {
    console.log('Settings Pressed');
}