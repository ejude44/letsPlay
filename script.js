'use strict';
//selecting elements
const player0El = document.querySelector(".player--0");

const player1El = document.querySelector(".player--1");

const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");

const diceEL =document.querySelector(".dice");

const btnNew = document.querySelector(".btn--new");

const btnRoll = document.querySelector(".btn--roll");

const btnHold = document.querySelector(".btn--hold");

const current0El = document.getElementById("current--0");

const current1El = document.getElementById("current--1");

//starting conditions
 let scores, currentScore, activePlayer, playing;
    

const innit = function() {

    
     scores = [0, 0];
    currentScore = 0;
     activePlayer = 0;
     playing = true;
    
    
    score0El.textContent = 0;
    score1El.textContent= 0;
    current0El.textContent =0;
    current1El.textContent =0;
    diceEL.classList.add("hidden"); 
    player0El.classList.remove("player--winner");
    player1El.classList.remove("player--winner");
    player0El.classList.add("player--active");
     player1El.classList.remove("player--active");


};

innit();


const switchPlayer = function
(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
currentScore =0;
activePlayer = activePlayer === 0 ? 1 : 0;
player0El.classList.toggle("player--active");
player1El.classList.toggle("player--active");
};


// Rolling dice functionality

btnRoll.addEventListener("click", function(){
//Generate  a random dice roll
if(playing){
const dice  = Math.trunc(Math.random() *6 ) +1;
console.log(dice);

// display dice

diceEL.classList.remove("hidden");
diceEL.src = `dice-${dice}.png`;

// check if 1 is rolled
if(dice !== 1){
    // add dice to current score
    currentScore = currentScore + dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    // change later
}else{
//switch to next player
 switchPlayer();
}
}
});

btnHold.addEventListener("click", function(){
    if(playing){

// add current score to active players scorer
scores[activePlayer] += currentScore;
// scores[1] = score[1] + currentScore;

document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
// check if plaers score >= 100

if (scores[activePlayer] >= 100){
    // finish the game
    playing= false;
    diceEL.classList.add("hidden");



    document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");

    document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
}else{
    // switch to the next player

    switchPlayer();

}
    }
})

// reset the game

btnNew.addEventListener("click", innit);


