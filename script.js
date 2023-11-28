'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
console.log(secretNumber);
let enteredNumber;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  enteredNumber = Number(document.querySelector('.guess').value);
  if (enteredNumber < 1) {
    document.querySelector('.message').textContent =
      'Enter a number between 1 and 20!';
  }

  if (score > 1) {
    if (enteredNumber >= 1 && enteredNumber <= 20) {
      if (enteredNumber < secretNumber) {
        document.querySelector('.message').textContent =
          'Your number is too low!';
        score = score - 1;
        document.querySelector('.score').textContent = score;
      } else if (enteredNumber > secretNumber) {
        document.querySelector('.message').textContent =
          'Your number is too high!';
        score = score - 1;
        document.querySelector('.score').textContent = score;
      } else if (enteredNumber == secretNumber) {
        document.querySelector('.message').textContent =
          'You guessed the number!';
      }
    }
  } else {
    document.querySelector('.message').textContent = 'You lost!';
    document.querySelector('.score').textContent = 0;
  }
});
