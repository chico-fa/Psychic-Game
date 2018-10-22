//Variables to hold the number of wins, losses, guesses left and # of guesses
var wins = 0;
var losses = 0;
var guesses_left = 9;

// Variables that hold references to the places in the HTML

var userChoiceText = document.getElementById("userchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var userGuessesText = document.getElementById("userguesses-text");

// Function that is run when the user presses a key
document.onkeyup = function (event) {

    //Determines which key was pressed
    var userGuess = event.key;

    //Randomly chooses a choice. This is the Computer's guess.
    var chars = "abcdefghijklmnopqrstuvwxyz";
    var string_length = 1;
    var randomstring = '';
    for (var i = 0; i < string_length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum, rnum + 1);
    }

    if (guesses_left === 0) {
        alert("Game Over. Refresh the screen to start again.");
        return;
    }

    if (userGuess === randomstring) {
        wins++;
        guesses_left--;

    } else if (userGuess != randomstring) {
        losses++;
        guesses_left--;
    }

    //Display the user guesses
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses Left: " + guesses_left;
    userChoiceText.textContent = "Your Guesses so far: " + userGuess;
}