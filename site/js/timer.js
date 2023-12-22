/*
const id1 = setInterval(() => { console.log("yes") }, 3000)
console.log("maybe")
const id2 = setInterval(() => { console.log("no") }, 1000)

console.log("id's:", id1, id2)

setTimeout(() => { clearTimeout, clearInterval(id1) }, 4000)
*/

/*
function startTimer(timerId, delayStart, delayStop) {
    const id1 = setInterval(() => { console.log(timerId, "request") }, delayStart)
    setTimeout(() => { console.log("break"), clearInterval(id1) }, delayStop)
}

startTimer(1, 1000, 5000)
startTimer(2, 3000, 6000)
*/

let buttons = document.querySelectorAll(".btn")

const buttonUptime = document.getElementById("uptime")
const buttonTimeout = document.getElementById("timeout")
const buttonDowntime = document.getElementById("downtime")

const buttonStart = document.getElementById("timerStart")
const buttonStop = document.getElementById("timerStop")
const buttonReset = document.getElementById("timerReset")

let timer = document.getElementById("timer")
let set, min, sec, inter

localStorage.setItem("time", (-1, -1))
let pulledMin, pulledSec = JSON.parse(localStorage.getItem("time"))
let paused = JSON.parse(localStorage.getItem("pause"))

buttonStart.onclick = () => { paused = false; inter = setInterval(() => { timeTick() }, 1000) }
buttonStop.onclick = () => { paused = true; clearInterval(inter) }

buttonUptime.onclick = () => { min = 25, sec = 12 }
buttonTimeout.onclick = () => { min = 5, sec = 0 }
buttonDowntime.onclick = () => { min = 15, sec = 0 }

if (pulledMin == -1 || pulledSec == -1) {
    min = 25, sec = 12
}
if (!paused) inter = setInterval(() => { timeTick() }, 1000)

function timeTick () {
    timer.textContent = timeCheck(min) + ":" + timeCheck(sec)
    sec--
    
    if (sec == -1) {
        min--
        sec = 59

        if (min == -1) {
            min = 0, sec = 0
            clearInterval(inter)
        }
    }

    localStorage.setItem("time", JSON.stringify(min, sec))
    // localStorage.setItem("pause", JSON.stringify(false))
}

function timeCheck (parameter) {
    if (parameter == /\d/) return ("0" + parameter)
    return parameter
}
