const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const clearBtn = document.getElementById("clear-btn");
const timer = document.getElementById("stopwatch");

let stopwatchInterval;
let pausedTime = 0;
let startTime = 0;
let isRunning = false;

startBtn.addEventListener("click", () => {
  if (!isRunning) {
    startTime = pausedTime ? Date.now() - pausedTime : Date.now();
    stopwatchInterval = setInterval(updateStopwatch, 1000);
    isRunning = true;
  }
});

stopBtn.addEventListener("click", () => {
  if (isRunning) {
    pausedTime = Date.now() - startTime;
    clearInterval(stopwatchInterval);
    isRunning = false;
  }
});

clearBtn.addEventListener("click", () => {
  clearInterval(stopwatchInterval);
  isRunning = false;
  pausedTime = 0;
  startTime = 0;
  timer.innerText = "00:00:00";
});

function updateStopwatch() {
  const elapsedTime = Date.now() - startTime;
  const seconds = Math.floor(elapsedTime / 1000) % 60;
  const minutes = Math.floor(elapsedTime / 60000) % 60;
  const hours = Math.floor(elapsedTime / 3600000);
  timer.innerText = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
  return number.toString().padStart(2, "0");
}
