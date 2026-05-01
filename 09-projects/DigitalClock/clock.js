function updatetime() {

    let now = new Date();
    console.log(now);
    let hours = now.getHours().toString().padStart(2, 0);
    let meridian = hours <= 12 ? "AM" : "PM";
    hours = hours % 12 || hours;
    let minutes = now.getMinutes().toString().padStart(2, 0);
    let seconds = now.getSeconds().toString().padStart(2, 0);


    document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds} ${meridian}`;

}

updatetime();
setInterval(updatetime, 1);