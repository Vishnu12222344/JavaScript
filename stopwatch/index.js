const display = document.getElementById("display");
const myh1 = document.getElementById("myh1");
let timer = null;
let starttime = 0;
let elapsedtime = 0;
let isrunning = false;

function start() {
    if (!isrunning) {
        starttime = Date.now() - elapsedtime;
        timer = setInterval(update, 10);
        isrunning = true;
    }
}

function stop() {
    if (isrunning) {
        clearInterval(timer);
        elapsedtime = Date.now() - starttime;
        isrunning = false;
    }
}

function reset() {
    clearInterval(timer);
    starttime = 0;
    elapsedtime = 0;
    isrunning = false;
    myh1.textContent = "00:00:00:00";
}

function update() {
    const currenttime = Date.now();
    elapsedtime = currenttime - starttime;

    let hours = Math.floor(elapsedtime / (1000 * 60 * 60));
    let min = Math.floor((elapsedtime / (1000 * 60)) % 60);
    let sec = Math.floor((elapsedtime / 1000) % 60);
    let millisec = Math.floor((elapsedtime % 1000) / 10);

    myh1.textContent =
        `${hours.toString().padStart(2, '0')}:` +
        `${min.toString().padStart(2, '0')}:` +
        `${sec.toString().padStart(2, '0')}:` +
        `${millisec.toString().padStart(2, '0')}`;
}