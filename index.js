
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

selectedDice1 = "images/dice"+randomNumber1+".png"
selectedDice2 = "images/dice"+randomNumber2+".png"

document.querySelector("div .img1").setAttribute("src",selectedDice1);
document.querySelector("div .img2").setAttribute("src",selectedDice2);


if (randomNumber1>randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins, bitch!";
} else if (randomNumber1<randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 wins, biatch!";
} else {
  document.querySelector("h1").innerHTML = "You both suck!";
}
