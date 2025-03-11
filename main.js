let timer;
let seconds = 0, minutes = 0, hours = 0;
let running = false;

function updateDisplay() {
    let display = document.getElementById("time-display");
    let sec = seconds < 10 ? `0${seconds}` : seconds;
    let min = minutes < 10 ? `0${minutes}` : minutes;
    let hr = hours < 10 ? `0${hours}` : hours;
    display.textContent = `${hr}:${min}:${sec}`;
}

document.getElementById("start-btn").onclick = function () {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            seconds++;
            if (seconds == 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
            updateDisplay();
        }, 1000);
    }
};

document.getElementById("stop-btn").onclick = function () {
    clearInterval(timer);
    running = false;
};

document.getElementById("reset-btn").onclick = function () {
    clearInterval(timer);
    running = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
};