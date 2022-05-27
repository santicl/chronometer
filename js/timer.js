let second = 0;
let minute = 0;
let hour = 0;

let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let h = document.getElementById("h");
let m = document.getElementById("m");
let s = document.getElementById("s");

document.getElementById("start").addEventListener("click", initTimer);
document.getElementById("stop").addEventListener("click", stop);
document.getElementById("reset").addEventListener("click", reset);

function initTimer() {
    setInterval(function() {
        seconds.innerHTML = second + " s";
        if (second == 60) {
            second = 0;
            minute++;
            minutes.innerHTML = minute + " Min";
        }
        if (minute == 60) {
            minute = 0;
            hours++;
            hours.innerHTML = hour + " Hr";
        }
        second++;
    
        h.style.strokeDashoffset = 440 - (440 * hour) / 24;
        m.style.strokeDashoffset = 440 - (440 * minute) / 60;
        s.style.strokeDashoffset = 440 - (440 * second) / 60;
    }, 1000);
}

function stop() {
    hours =  hour
    minutes = minute
    seconds = second

    h = h
    m = m
    s = s
}

function reset() {
    clearInterval(hours, minutes, seconds);
}