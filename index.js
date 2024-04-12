let hour=document.getElementById("hour");
let min=document.getElementById("min");
let sec=document.getElementById("sec");

function displayTime()
{
    let date = new Date();

    let hh = date.getHours();
    let ss = date.getMinutes();
    let mm = date.getSeconds();

    let hRotation = 30*hh+mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hour.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform=`rotate(${mRotation }deg)`;
    sec.style.transform=`rotate(${sRotation }deg)`;

}

setInterval(displayTime,1000);


