console.log('mainMenu.js running');


// menuButtons object, contains all data for buttons within the main menu bar
const menuButtons = [
    {
        id: 'play_Image',
        unpressed: './assets/images/play-unpressed.png',
        pressed: './assets/images/play-pressed.png'
    },
    {
        id: 'pause_Image',
        unpressed: './assets/images/pause-unpressed.png',
        pressed: './assets/images/pause-pressed.png'
    },
    {
        id: 'mute_Image',
        unpressed: './assets/images/sound_on.png',
        pressed: './assets/images/sound_off.png',
        toggle: true,
        isPressed: false
    },
    {
        id: 'restart_Image',
        unpressed: './assets/images/back-unpressed.png',
        pressed: './assets/images/back-pressed.png'
    },

    {
        id: 'settings_Image',
        unpressed: './assets/images/list-two-unpressed.png',
        pressed: './assets/images/list-two-pressed.png'
    }

];


// Menu Buttons For Loop, loops through all buttons from menuButtons Object, then toggles image and or additional functionality
menuButtons.forEach (button => {

    const btn = document.getElementById(button.id);

    // If statement for buttons that are toggled, rather than a simple image swap
    if (button.toggle) {
        btn.addEventListener('click', () => {
            button.isPressed = !button.isPressed;
            btn.setAttribute('src', button.isPressed ? button.pressed : button.unpressed);

            audio.muted = button.isPressed;
        });
    } else {

    // MouseDown Event listener, with if statements for each button to call respective functions from game.js
    btn.addEventListener('mousedown', () => {
        btn.setAttribute("src", button.pressed);
        if(button.id === "play_Image"){ 
            playGame();
        }
        if(button.id === "pause_Image"){ 
            pauseGame();
        }
        if(button.id === "restart_Image"){
            restart();
        }
        if(button.id === "settings_Image"){
            settings();
        }
    });

    // MouseUP event listener, toggles image
    btn.addEventListener('mouseup', () => {
        btn.setAttribute("src", button.unpressed);
    });

    // MouseOut event listener, toggles image
    btn.addEventListener('mouseout', () => {
        btn.setAttribute("src", button.unpressed);
    });
    }

});