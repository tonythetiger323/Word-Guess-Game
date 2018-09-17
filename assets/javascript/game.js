//Define any possible variables
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
//Have computer select a word to be guessed and display empty lines
chosenWord = phrases[Math.floor(Math.random() * phrases.length)];
console.log(chosenWord);
var currentWordP = document.getElementById("currentWord");
for(var i = 0; i < chosenWord.length; i++){
    var j = chosenWord[i];
    if (j === " ") {
        blankSpace += " ";
    }else{
    blankSpace += "_";
    }
}

currentWordP.textContent = blankSpace;
console.log(blankSpace);

var numberRemainingP = document.getElementById("numberRemaining");
numberRemainingP.textContent = guessesRemaining;

//Code to handle processing user's guess
document.onkeyup = function(event) {
    userGuess = event.key.toUpperCase();
    console.log(userGuess);

    for(var i = 0; i < chosenWord.length; i++){
        if(chosenWord[i] === userGuess){
            console.log("true");
            blankSpace[i] = userGuess;
            console.log(blankSpace[i]);
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