// Random Number for Player 1//
var randomNumber1 = Math.floor( Math.random() * 6) + 1;
var imageNumber1 = "images/dice" + randomNumber1 + ".png";

var firstImage = document.querySelector('img.img1');
firstImage.setAttribute('src' , imageNumber1);



// Random Number for Player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var imageNumber2 = "images/dice" + randomNumber2 + ".png";

var secondImage = document.querySelector('img.img2');
secondImage.setAttribute('src' , imageNumber2);

// Change Title to show winner
function showPlayer()
{
  if (randomNumber1 > randomNumber2){
document.querySelector('h1').innerHTML = " ⛳️ Player 1 Wins";
  }
  else if (randomNumber1 < randomNumber2) {
    document.querySelector('h1').innerHTML = "Player 2 Wins ⛳️";
  }
  else if( randomNumber1 === randomNumber2){
    document.querySelector('h1').innerHTML = "Draw 😱";
  }
}
showPlayer();
