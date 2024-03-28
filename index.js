
var randomNumber1 = Math.floor(Math.random() * 6)  + 1;
var randomDice1 = "dice" + randomNumber1 + ".png";
var randomImageSrc1 = "images/" + randomDice1;


document.querySelector(".img1").setAttribute("src", randomImageSrc1);

var randomNumber2 = Math.floor(Math.random() * 6)  + 1;
var randomDice2 = "dice" + randomNumber2 + ".png";
var randomImageSrc2 = "images/" + randomDice2;

document.querySelector(".img2").setAttribute("src", randomImageSrc2);


    if (randomNumber1 > randomNumber2) {

    document.querySelector("h1").innerHTML = "Player 1 wins!";   
    }
    else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";    
    }
    else {
    document.querySelector("h1").innerHTML = "Players are tied!";
    }

