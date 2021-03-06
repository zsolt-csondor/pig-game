//Global variables
var scores, roundScore, activePlayer, winningScore;
winningScore = 100; //Points required to win the game

init();

document.querySelector(".btn-roll").addEventListener("click", function() {

  //Generate a dice roll
  var dice = Math.floor(Math.random() * 6 + 1);

  //Displaying the roll in the middle
  var diceDOM = document.querySelector(".dice");

  diceDOM.style.display = "block";
  diceDOM.src = "img/dice-" + dice + ".png";

  //Updating score IF the roll was not a 1. Otherwise reset the current scores
  //and change the active player.
  if(dice > 1) {
    roundScore += dice;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  }
  else {
    nextPlayer();
  }
});

document.querySelector(".btn-hold").addEventListener("click", function() {
  //Add current score to global score and update the UI and check if the active
  //player won
  scores[activePlayer] += roundScore;
  document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];

  if(scores[activePlayer] >= winningScore) {
    document.querySelector("#name-" + activePlayer).textContent = "Winner!";
    document.querySelector(".dice").style.display = "none";
    document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
    document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");

    //Disable "hold" and "roll" buttons
    document.querySelector(".btn-hold").disabled = true;
    document.querySelector(".btn-roll").disabled = true;
  }
  else {
    nextPlayer();
  }
});

document.querySelector(".btn-new").addEventListener("click", init);

//Initialization; Hiding the dice image before the first roll as well as
//setting all the scores to 0
function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;

  document.querySelector(".dice").style.display = "none";

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");

  document.querySelector(".btn-hold").disabled = false;
  document.querySelector(".btn-roll").disabled = false;

}

function nextPlayer() {
  roundScore = 0;
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  document.querySelector(".dice").style.display = "none";
}

/* TODO refactoring:
create an init() function and call that for the new game button and when the page loads.
create separate functions for the roll dice and hold buttons instead of using anonymous functions
save the target score into a variable instead of hardcoding it. Move the dice images into a separate folder.
*/
