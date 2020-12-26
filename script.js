'use strict';

//handling click events

//variables
let secretnumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

//check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  console.log(guess);

  //if there is no value
  if (!guess) {
    document.querySelector('.message').textContent = 'no number👍';
  }
  //if player wins
  else if (guess == secretnumber) {
    document.querySelector('.message').textContent = 'correct number boy🌚';
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30vh';
    document.querySelector('.number').textContent = secretnumber;

    //highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //guess to high
  else if (guess > secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'to high🌕';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game';
    }
  }
  //guess to low
  else if (guess < secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'to low🌕';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game';
    }
  }
});

//Agian button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector('.message').textContent = 'start guessing..';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15vh';
});
