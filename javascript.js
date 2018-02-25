let tempX = 0;
let tempY = 0;

function getMouseXY() {
        tempX = event.clientX;
        tempY = event.clientY;

    if (tempX < 0){tempX = 0;}
    if (tempY < 0){tempY = 0;}
}

function mouseMoved() {
    getMouseXY();
    secX = tempX - 100;
    secY = tempY - 100;
    document.getElementById("circle").style.setProperty("top", secY+"px");
    document.getElementById("circle").style.setProperty("left", secX+"px");
}

