canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

marsImages = ["marsO.jpg", "mars1.jpg", "mars2.jpg", "mars4.jpg"];

randomNumber = Math.floor(Math.random() * 4);

console.log(randomNumber);


rover_width = 100;
rover_height = 100;

rover_image = "rover.png";

background_image = marsImages[randomNumber];
console.log("Background Image: " + background_image);

rover_x = 10;
rover_y = 10;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown)
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed)
    if (keyPressed == '38') {
        up();
        console.log("up");
    }

    if (keyPressed == '40') {
        down();
        console.log("down");
    }

    if (keyPressed == '37') {
        left();
        console.log("left");
    }

    if (keyPressed == '39') {
        right();
        console.log("right");
    }

}

function up() {
    if (rover_y >= 0) {
        rover_y = rover_y - 5;
        console.log("When Up Arrow Is Pressed, x=" + rover_x + "and y =" + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function down() {
    if (rover_y <= 500) {
        rover_y = rover_y + 5;
        console.log("When Up Arrow Is Pressed, x=" + rover_x + "and y =" + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 5;
        console.log("When Up Arrow Is Pressed, x=" + rover_x + "and y =" + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function right() {
    if (rover_x <= 700) {
        rover_x = rover_x + 5;
        console.log("When Up Arrow Is Pressed, x=" + rover_x + "and y =" + rover_y);
        uploadBackground();
        uploadrover();
    }
}