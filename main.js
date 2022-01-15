"use strict";

let scoreVal = 20;
let highScoreVal = 0

let gameStatus = document.querySelector('.right .status');
let score = document.querySelector('.right .score');
let highScore = document.querySelector('.right .highscore');
let answer = document.querySelector('.box-content');
let number = Math.floor(Math.random()*20);

const again = document.querySelector('.header button');
again.addEventListener('click', function() {
  number = Math.floor(Math.random() * 20);
  scoreVal = 20;
  score.textContent = `📛 Score: ${scoreVal}`;
  gameStatus.textContent = `🛑 Start Guessing...`;
  document.body.style.backgroundColor = "rgb(32, 32, 32)";
  document.querySelector('.container .left .check').value = null;
  answer.textContent = `?`;
})
let check = document.querySelector('.last-section button');
check.addEventListener('click', function() {
  let inputVal = document.querySelector('.container .left .check').value;
  if(number == inputVal) {
    answer.textContent = `${inputVal}`;
    document.body.style.backgroundColor = "chartreuse";
    gameStatus.textContent = `🔥 Correct Number!`;
    score.textContent = `📛 Score: ${scoreVal}`;
    if(scoreVal > highScoreVal) {
      highScoreVal = scoreVal;
      highScore.textContent = `💫 Highscore: ${highScoreVal}`;
    }
    else {
      highScore.textContent = `💫 Highscore: ${highScoreVal}`;
    }
  }
  else if(number > inputVal) {
    gameStatus.textContent = `Too Low!`;
    scoreVal--;
    score.textContent = `📛 Score: ${scoreVal}`;
  }
  else {
    gameStatus.textContent = `Too High!`;
    scoreVal--;
    score.textContent = `📛 Score: ${scoreVal}`;
  }
})
