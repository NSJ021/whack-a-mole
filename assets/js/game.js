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
    audio.play();
}

/**
 * Pause Game Function: Controls what happens when the pause button is pressed
 */
window.pauseGame = () => {
    console.log('Paused Button Pressed');
    window.pauseGameTimer();
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

// Plumber getting hit loop, toggling the hammer rotation
    const plumbers = document.getElementsByClassName('plumber');

    for (var i = 0; i < plumbers.length; i++){

        plumbers[i].addEventListener('mousedown', (e) => {
            console.log("plumber clicked");
            window.updateGameScore();
            e.target.setAttribute("src", "./assets/images/plumber_hit.png");
            console.log("hammer spin");
            document.body.style.cursor = 'url("./assets/images/hammer_left.png"), auto';

            
        // Holds hammer to the left for .5 seconds, then reverts back to normal hammer
        setTimeout(() => {
            console.log("Timer started");
            document.body.style.cursor = 'url("./assets/images/hammer.png"), auto';
        }, 500);
    });

    }