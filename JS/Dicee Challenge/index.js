var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var image1 = document.querySelector(".img1");
var imageUrl1 = "./images/dice" + randomNumber1 +".png";
image1.setAttribute("src", imageUrl1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var image2 = document.querySelector(".img2");
var imageUrl2 = "./images/dice" + randomNumber2 +".png"
image2.setAttribute("src", imageUrl2);
//
var title = document.querySelector("h1");
if( randomNumber1 > randomNumber2){
  title.innerHTML = "Player 1 Wins!";
}else if(randomNumber1 < randomNumber2)
{
  title.innerHTML = "Player 2 Wins!";
}else{
  title.innerHTML = "Draw!";
}
