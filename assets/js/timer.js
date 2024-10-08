console.log('timeer.js has loaded');

const secondsOutput = document.getElementById('seconds');
const minutesOutput = document.getElementById('minutes');
let totalSeconds = 0;


const gameTimer = () => {
    setInterval ( () => {
        ++totalSeconds;
        secondsOutput.innerText = padding(totalSeconds % 60);
        minutesOutput.innerText = padding(parseInt(totalSeconds / 60));
    }, 1000);
}

function padding(val) {
    var valString = val + "";
    if (valString.length < 2) {
      return "0" + valString;
    } else {
      return valString;
    }
  }

  //gameTimer();