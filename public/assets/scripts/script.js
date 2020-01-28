var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var message = document.querySelector(".message");
var h1 = document.querySelector("h1");
var colorButton = document.querySelector(".new-colors");
var easy = document.querySelector(".easy");
var hard = document.querySelector(".hard");
var numSquares = 6;

easy.addEventListener("click",function() {
    easy.classList.toggle("selected");
    hard.classList.toggle("selected");
    numSquares = 3;
    reset();
    colorDisplay.textContent = pickedColor;
    for(var i = 3; i < squares.length; i++) {
        squares[i].style.display = "none";
    }
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
});

hard.addEventListener("click",function() {
    easy.classList.toggle("selected");
    hard.classList.toggle("selected");
    numSquares = 6;
    reset();
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
})

var colorDisplay = document.querySelector("#color-display");
colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click",function() {
        var clickedColor = this.style.backgroundColor;
        if(clickedColor == pickedColor) {
            message.textContent = "Correct";
            changeColor(pickedColor);
            h1.style.backgroundColor = pickedColor;
            colorButton.textContent = "Play Again?"
        }
        else {
            this.style.backgroundColor = "#232323";
            message.textContent = "Try again!";
        }
    })
}

function changeColor(color) {
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];
    for(var i = 0; i < num; i++) {
        arr[i] = randomColor();
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset() {
    message.textContent = "";
    colorButton.textContent = "new colors";
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";

}

colorButton.addEventListener("click",function() {
    reset();
})