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
    window.startGameTimer();
    window.activatePlumbers();
    audio.play();
    // bash_Plumber();
}

/**
 * Pause Game Function: Controls what happens when the pause button is pressed
 */
window.pauseGame = () => {
    console.log('Paused Button Pressed');
    window.pauseGameTimer();
    window.deactivatePlumbers();
    audio.pause();
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

