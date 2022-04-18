let characters = [0, "A", 1, "a", "B", 2, "b", "C", 3, "c", "D", 4, "d", "E", 5, "e", "F", 6, "f", "G", 7, "g", "H", 8, "h", "I", 9, "i", "J", "!", "j", "K", "@", "k", "L", "#", "l", "$", "M", "?", "m", "N", "n", "O", "o", "P", "p", "Q", "q", "R", "r", "S", "s", "T", "t", "U", "u", "V", "v", "W", "w", "X", "x", "Y", "y", "Z", "z"];
let passwordOneEl = document.getElementById('password1-el');
let passwordTwoEl = document.getElementById('password2-el');
let passwordThreeEl = document.getElementById('password3-el');
let passwordFourEl = document.getElementById('password4-el');
let length = 0;

function startGenerator() {
    passwordOneEl.textContent = "";
    passwordTwoEl.textContent = "";
    passwordThreeEl.textContent = "";
    passwordFourEl.textContent = "";
  generatePassword();
}
function generatePassword() {
  length = document.getElementById('character-count').value;
  for (let i = 0; i < length; i++) {
    randomNumber = Math.floor(Math.random() * characters.length);
    passwordOneEl.textContent += characters[randomNumber];
  }
  generatePasswordTwo();
}
function generatePasswordTwo() {
  length = document.getElementById('character-count').value;
  for (let i = 0; i < length; i++) {
    randomNumber = Math.floor(Math.random() * characters.length);
    passwordTwoEl.textContent += characters[randomNumber];
  }
  generatePasswordThree();
}
function generatePasswordThree() {
  length = document.getElementById('character-count').value;
  for (let i = 0; i < length; i++) {
    randomNumber = Math.floor(Math.random() * characters.length);
    passwordThreeEl.textContent += characters[randomNumber];
  }
  generatePasswordFour();
}
function generatePasswordFour() {
  length = document.getElementById('character-count').value;
  for (let i = 0; i < length; i++) {
    randomNumber = Math.floor(Math.random() * characters.length);
    passwordFourEl.textContent += characters[randomNumber];
  }
}