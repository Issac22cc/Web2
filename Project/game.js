let score = 0;
let interval = 2000;
let speed;
let target = document.getElementById("moveImg");

window.onload = function start(){
    target .addEventListener("click", check);
    reload();
}


function reload(){
    document.getElementById("showScore").innerHTML = score;
    speed = window.setInterval(moveImgs, interval);
}

function moveImgs(){
    let left = (Math.random() * 750) + "px";
    let top = (Math.random() * 350) + "px";
    target.style.left = left ;
	target.style.top = top ;
    target.addEventListener("click", check);
	target.addEventListener("ontouchstart", check);
}

function check(){
    target.removeEventListener("click", check);
    score = score + 10;
    document.getElementById("showScore").innerHTML = score;
    interval = interval - 100;
    clearInterval(speed);
    speed = window.setInterval(moveImgs, interval);
    moveImgs();
}

function resetScore(){
    score = 0;
    document.getElementById("showScore").innerHTML = score;
}

function resetSpeed(){
    interval = 2000;
    clearInterval(speed);
    speed = window.setInterval(moveImgs, interval);
}