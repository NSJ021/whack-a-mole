console.log('Game.js Running');


const audio = document.getElementById('background_Audio');

/**
 * Start Game Function: Main function for controlling what happens at game start
 */
const startGame = () => {
    console.log('Game Starting ....'); 
}

/**
 * Play Game Function: Controls what happens when the play button is pressed
 */
window.playGame = () => {
    console.log('Play Button Pressed');
    startGame();
    window.startGameTimer();
    window.activatePlumbers();
    audio.play();
}

/**
 * Pause Game Function: Controls what happens when the pause button is pressed
 */
window.pauseGame = () => {
    console.log('Paused Button Pressed');
    window.pauseGameTimer();
    window.deactivatePlumbers();
    

    isPaused = !isPaused; // Toggle the pause state

    if (isPaused) {
        clearInterval(intervalId); // Stop the interval when paused
        audio.pause();
        
    } else {
        // Restart the interval only if it's not already running
        intervalId = setInterval(showRandomMoles, 1000); // Restart the interval
        audio.play();
    }
}
    


/**
 * Restart Game Function: Controls what happens when the Restart button is pressed
 */
window.restart = () => {
    console.log('Restart Pressed');
    window.resetGameTimer();
}


/**
 * Settings Function: Controls what happens when the settings button is pressed
 */
window.settings = () => {
    console.log('Settings Pressed');

}



