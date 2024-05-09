let timer = document.getElementById('timer');
let [hour, minute, second] = timer.textContent.split(":");
const inter = setInterval(() => {
    if (Number(second) > 0) {
        second = Number(second) - 1;
    } else if (Number(minute) > 0) {
        minute = Number(minute) - 1;
        second = 59;
    } else if (Number(hour) > 0) {
        hour = Number(hour) - 1;
        minute = 59;
    } else {
        clearInterval(inter);
        timer.textContent = "You win!"
        return document.getElementById("kitty").click() 
    }
    timer.textContent = `${hour < 10 ? "0" + +hour : hour}:${minute < 10 ? "0" + +minute : minute}:${second < 10 ? "0" + second : second}`
}, 1000)