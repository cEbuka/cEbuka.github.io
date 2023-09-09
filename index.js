const profileName = document.getElementById("name").textContent = "Simon Chukwuebuka"
const myTrack = document.getElementById("track").textContent = "Frontend"

//Show current day
const date = new Date();
const weekday = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const day = document.getElementById("day").innerHTML = weekday[date.getDay()]
//document.getElementById("day").innerHTML = currentDay.getDay();

//Get UTC time
function currentTime() {
    const d = new Date()
    let h = d.getUTCHours()
    let m = d.getUTCMinutes()
    let s = d.getUTCSeconds()

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("time").innerHTML = `${h}:${m}:${s}`
    setTimeout(currentTime, 1000)
}
currentTime();
