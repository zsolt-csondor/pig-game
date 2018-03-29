

var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

//Initialization; Hiding the dice image before the first roll as well as
//setting all the scores to 0
document.querySelector(".dice").style.display = "none";

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

document.querySelector(".btn-roll").addEventListener("click", function() {

  //Generate a dice roll
  var dice = Math.floor(Math.random() * 6 + 1);

  //Displaying the roll in the middle
  var diceDOM = document.querySelector(".dice");

  diceDOM.style.display = "block";
  diceDOM.src = "dice-" + dice + ".png";

  //Updating score IF the roll was not a 1
  if(dice > 1) {
    roundScore += dice;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  }
  else {
    roundScore = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    document.querySelector(".dice").style.display = "none";

  }
});
