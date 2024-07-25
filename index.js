var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1*6) + 1;

var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2*6) + 1;

var imagePath1 = "dice" + randomNumber1;
var srcPath1 = "./images/" + imagePath1 + ".png";
document.querySelector(".img1").setAttribute("src", srcPath1);

var imagePath2 = "dice" + randomNumber2;
var srcPath2 = "./images/" + imagePath2 + ".png";
document.querySelector(".img2").setAttribute("src", srcPath2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "Player1 Wins!";
}
if(randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "Player2 Wins!";
}
if(randomNumber1 === randomNumber2){
    document.querySelector("h1").textContent = "Refresh Me Again For the Winner!";
}