let gameNumber = Math.floor(Math.random() * 50) + 1;

let attempts = 0;
let guesses = [];

function checkGuess() {

let guess = Number(document.getElementById("guessInput").value);

if (guess < 1 || guess > 50) {
document.getElementById("result").innerHTML = "Enter a number between 1 and 50";
return;
}

attempts++;
guesses.push(guess);

document.getElementById("attempts").innerHTML = "Attempts: " + attempts;

document.getElementById("history").innerHTML = "Previous guesses: " + guesses.join(", ");

if (guess === gameNumber) {

document.getElementById("result").innerHTML = "🎉 Correct! You guessed the number!";

}

else if (guess < gameNumber) {

document.getElementById("result").innerHTML = "Your number is smaller than the game number";

}

else {

document.getElementById("result").innerHTML = "Your number is bigger than the game number";

}

}

function restartGame() {

gameNumber = Math.floor(Math.random() * 50) + 1;

attempts = 0;

guesses = [];

document.getElementById("result").innerHTML = "";

document.getElementById("attempts").innerHTML = "Attempts: 0";

document.getElementById("history").innerHTML = "Previous guesses:";

document.getElementById("guessInput").value = "";

}