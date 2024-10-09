console.log('Game.js Running');


const audio = document.getElementById('background_Audio');

const moleAreas = document.getElementsByClassName('moleArea');
const plumbers = document.getElementsByClassName('plumber');

let isPaused = false
let intervalId;


/**
 * Start Game Function: Main function for controlling what happens at game start
 */
const startGame = () => {
    console.log('Game Starting ....');
    intervalId = setInterval(showRandomMoles, 1000);
    
}

/**
 * Play Game Function: Controls what happens when the play button is pressed
 */
window.playGame = () => {
    console.log('Play Button Pressed');
    startGame();
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

    isPaused = !isPaused; // Toggle the pause state

    if (isPaused) {
        clearInterval(intervalId); // Stop the interval when paused
        
    } else {
        // Restart the interval only if it's not already running
        intervalId = setInterval(showRandomMoles, 1000); // Restart the interval
        
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

    // Plumber getting hit loop, toggling the hammer rotation
    // const plumbers = document.getElementsByClassName('plumber');

    // for (var i = 0; i < plumbers.length; i++){

    //     plumbers[i].addEventListener('mousedown', (e) => {
    //         window.updateGameScore();
    //         e.target.setAttribute("src", "./assets/images/plumber_hit.png");
    //         document.body.style.cursor = 'url("./assets/images/hammer_left.png"), auto';

            
    //     // Holds hammer to the left for .5 seconds, then reverts back to normal hammer
    //     setTimeout(() => {
    //         document.body.style.cursor = 'url("./assets/images/hammer.png"), auto';
    //     }, 500);
    // });

    // }


    // const moleAreas = document.getElementsByClassName('moleArea');
    // const plumbers = document.getElementsByClassName('plumber');

// Function to show a random plumber in random mole areas
function showRandomMoles() {
    // Only execute if the game is not paused
    if (isPaused) {
        return;
    }

    // First, hide all moles
    for (let i = 0; i < plumbers.length; i++) {
        plumbers[i].style.display = 'none'; // Hide all plumbers
    }

    // Get the currently visible moles
    const currentlyVisible = Array.from(plumbers).filter(plumber => plumber.style.display === 'block');
    
    // If there are already 2 moles visible, do nothing
    if (currentlyVisible.length >= 1) {
        return;
    }

    // Calculate how many new moles to show
    const molesToShow = 1 - currentlyVisible.length;

    // Randomly show moles
    const shownIndices = new Set(); // Use a Set to avoid duplicates

    while (shownIndices.size < molesToShow) {
        const randomIndex = Math.floor(Math.random() * moleAreas.length);
        if (!shownIndices.has(randomIndex)) {
            shownIndices.add(randomIndex);
            plumbers[randomIndex].style.display = 'block'; // Show plumber in the selected mole area
        }
    }
}

// Set an interval to show moles every 1 seconds (for example)
// setInterval(showRandomMoles, 1000);
