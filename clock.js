let time = document.getElementById("time");

//let alert = document.getElementsByClassName("alert")[0];

setInterval(() => {
    let d = new Date();
    time.innerHTML = "Hours: " + d.getHours() + "<br>Minutes: " + d.getMinutes() + "<br>Seconds: " + d.getSeconds();
}, 1000);