const audio = document.getElementById('background_Audio');
var playAudio = () => { 
    audio.play();
}
var pauseAudio = () => { 
    audio.pause();
}


// Connect up bottons to variables 
let playBtn = document.getElementById('play_Image');
let resetBtn = document.getElementById('restart_Image');
let muteBtn = document.getElementById('mute_Image');


// Add click event listener for play button 
playBtn.addEventListener('click', () => { 
    window.playGame();
});

// Add click event listener for restart button 
resetBtn.addEventListener('click', () => {
    window.resetGame();
});

// Initiate ispressed to keep track of audio button pressed state
let isPressed = false; 

// Add click event listener for mute button
muteBtn.addEventListener('click', (e) => {
    e.target.setAttribute('src', isPressed ? './assets/images/sound_on.png' : './assets/images/sound_off.png');
    isPressed = !isPressed;
    audio.muted = isPressed;
});
