// Plumber getting hit loop, toggling the hammer rotation
const plumbers = document.getElementsByClassName('plumber');

const handleEvent = (e) => {
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



window.activatePlumbers = activatePlumbers;
window.deactivatePlumbers = deactivatePlumbers;