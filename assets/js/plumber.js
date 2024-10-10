// Plumber getting hit loop, toggling the hammer rotation
const plumbers = document.getElementsByClassName('plumber');

const handleEvent = (e) => {
    let plumber = e.target;
    console.log("plumber clicked");
    window.updateGameScore();
    plumber.setAttribute("src", "./assets/images/plumber_hit.png");
    console.log("hammer spin");
    document.getElementById('innerGame').style.cursor = 'url("./assets/images/hammer_left.png"), auto';
    //document.body.style.cursor = 'url("./assets/images/hammer_left.png"), auto';

    setTimeout(() => {
        plumber.setAttribute("src", "./assets/images/plumber_150.png");
        console.log(plumber);
    }, 1000);

    // Holds hammer to the left for .5 seconds, then reverts back to normal hammer
    setTimeout(() => {
        console.log("Timer started");
        document.getElementById('innerGame').style.cursor = 'url("./assets/images/hammer.png"), auto';
    }, 500);
};

const activatePlumbers = () => {
    for (var i = 0; i < plumbers.length; i++) {
        plumbers[i].addEventListener('mousedown', handleEvent);
    }
};

const deactivatePlumbers = () => {
    console.log('decativate plumbers has been pressed');
    for (var i = 0; i < plumbers.length; i++) {
        console.log('decativating plumbers');
        plumbers[i].removeEventListener('mousedown', handleEvent);
    }
};

let isPaused = false;
let intervalId;

const showPlumber = () => { 
    
}



// Function to show a random plumber in random mole areas
function showRandomPlumber() {
    // Only execute if the game is not paused
    if (isPaused) {
        return;
    }

    // First, hide all moles
     for (let i = 0; i < plumbers.length; i++) {
         plumbers[i].classList.remove('showPlumber'); // Hide all plumbers
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
        const randomIndex = Math.floor(Math.random() * plumbers.length);
        if (!shownIndices.has(randomIndex)) {
            shownIndices.add(randomIndex);
            ///plumbers[randomIndex].style.display = 'block'; // Show plumber in the selected mole area
            plumbers[randomIndex].classList.add('showPlumber');
        }
    }
}












window.activatePlumbers = activatePlumbers;
window.deactivatePlumbers = deactivatePlumbers;
window.showRandomPlumber = showRandomPlumber;