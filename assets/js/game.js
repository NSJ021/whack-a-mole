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

// window.hitMole = () => {

    const plumbers = document.getElementsByClassName('plumber');

    for (var i = 0; i < plumbers.length; i++){

        plumbers[i].addEventListener('mousedown', (e) => {
            console.log("plumber clicked")
            // plumber.style.cursor = 'url("../images/hammer_left.png") 16 16, auto;'
            e.target.setAttribute("src", "./assets/images/plumber_hit.png");
    })
    }
    
    

// }

// document.addEventListener('mousemove', (e) => {
//     hammer.style.left = `${e.pageX - 50}px`;  // Adjust the position based on hammer size
//     hammer.style.top = `${e.pageY - 50}px`;   // Adjust the position based on hammer size
// });

// // Rotate the hammer 90 degrees anticlockwise on mousedown
// document.addEventListener('mousedown', () => {
//     hammer.style.transform = 'rotate(-90deg)';
// });

// // Rotate the hammer back to 0 degrees on mouseup
// document.addEventListener('mouseup', () => {
//     hammer.style.transform = 'rotate(0deg)';