// Define any possible variables
var guessesRemaining = 13;
var userGuess = "";
var chosenWord = "";
var blankSpace = "";


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


//
// -- Game "Simulation" --

// Have computer select a word to be guessed and display empty lines
chosenWord = selectRandomWord();
log('Chosen Word', chosenWord);


for (var i = 0; i < chosenWord.length; i++) {
    var j = chosenWord[i];
    if (j === " ") {
        blankSpace += " ";
    } else {
        blankSpace += "_";
    }
}

currentWordP.textContent = blankSpace;
log('Intial Blank Space', blankSpace)


numberRemainingP.textContent = guessesRemaining;

// Code to handle processing user's guess
document.onkeyup = function (event) {
    var userGuess = event.key.toUpperCase();
    log('User Guess', userGuess);

    for (var i = 0; i < chosenWord.length; i++) {
        if (chosenWord[i] === userGuess) {
            blankSpace = blankSpace.substring(0, i) +  userGuess + blankSpace.substring(i + 1);
            log('Blank Space', blankSpace);
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