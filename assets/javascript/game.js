// Define any possible variables
var guessesRemaining = 13;
var userGuess = "";
var chosenWord = "";
var blankSpace = "";
var lettersGuessed = [];
var wins = 0;

// Press any key to get started

//Make a list of possible words
var phrases = [
    "VANJIE",
    "READING",
    "RUNWAY",
    "DRAG RACE",
    "LOVE",
    "RUPAUL",
    "LIP SYNC",
    "PIT CREW",
    "SNATCH GAME",
    "MICHELLE VISAGE",
    "SASHAY",
    "SHANTAY"
]

//
// -- Functions --
function selectRandomWord() {
    return phrases[Math.floor(Math.random() * phrases.length)];
}

function log(title, message) {
    console.log(title, message);
}

//
// -- HTML DOM Elements --
var currentWordP = document.getElementById("currentWord");
var numberRemainingP = document.getElementById("numberRemaining");
var lettersGuessedP = document.getElementById("lettersGuessed");
var winsP = document.getElementById("wins");
numberRemainingP.textContent = guessesRemaining;
winsP.textContent = wins;

//
// -- Game "Simulation" --

// Have computer select a word to be guessed and display empty lines
chosenWord = selectRandomWord();
log('Chosen Word', chosenWord);
var wordCountDown = chosenWord.length;
log('Word Count Down', wordCountDown);
for (var i = 0; i < chosenWord.length; i++) {
    var j = chosenWord[i];
    if (j === " ") {
        blankSpace += " ";
        wordCountDown--;
        log('Word Count Down', wordCountDown);
    } else {
        blankSpace += "_";
    }
}
currentWordP.textContent = blankSpace;
log('Intial Blank Space', blankSpace)

// Code to handle processing user's guess
document.onkeyup = function (event) {
    var userGuess = event.key.toUpperCase();
    log('User Guess', userGuess);
    lettersGuessed.push(userGuess);
    log('Letters Guessed', lettersGuessed);
    lettersGuessedP.textContent = lettersGuessed;
    guessesRemaining--;
    numberRemainingP.textContent = guessesRemaining;

    for (var i = 0; i < chosenWord.length; i++) {
        if (userGuess === chosenWord[i]) {
            blankSpace = blankSpace.substring(0, i) +  userGuess + blankSpace.substring(i + 1);
            log('Blank Space', blankSpace);
            currentWordP.textContent = blankSpace;
            wordCountDown--;
            log('Word Countdown', wordCountDown);
        }

        if (wordCountDown === 0){
            wins++;
            log('Wins', wins);
            winsP.textContent = wins;
        }
    }
    
}
//Check user's guess against current word

    //Guess is correct
        //reveal guessed letter in current word

    //Guess is incorrect
        //add guessed letter to letters guessed and decrease guesses remainging

        //if guess is repeat of anohter previous incorrect guess letters guessed and guesses remaining are not effected

 //If user wins, increase win count by 1 and post/change image on left side start playing song and show completed guessed word at top of screen

 //If wins or loses, reset game after last screen 