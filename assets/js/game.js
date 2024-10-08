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
    audio.play();
}

/**
 * Pause Game Function: Controls what happens when the pause button is pressed
 */
window.pauseGame = () => {
    console.log('Paused Button Pressed');
    audio.pause();
    
}

/**
 * Restart Game Function: Controls what happens when the Restart button is pressed
 */
window.restart = () => {
    console.log('Restart Pressed');

}


/**
 * Settings Function: Controls what happens when the settings button is pressed
 */
window.settings = () => {
    console.log('Settings Pressed');

}