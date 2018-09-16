//Define any possible variables


// Press any key to get started

//Make a list of possible words
var phrases = [
    "Vanjie",
    "reading",
    "runway",
    "drag race",
    "love",
    "RuPaul",
    "lip sync",
    "pit crew",
    "snatch game",
    "Michelle Visage",
    "sashay",
    "shantay"
]
//Have computer select a word to be guessed and display empty lines
var chosenWord = phrases[Math.floor(Math.random() * phrases.length)];
console.log(chosenWord);
var currentWordP = document.getElementById("currentWord");
var blankSpace = "";
console.log(blankSpace);
for(var i = 0; i < chosenWord.length; i++){
    var j = chosenWord[i];
    if (j === " ") {
        blankSpace += " ";
    }else{
    blankSpace += "_";
    console.log(blankSpace);
    }
} 
currentWordP.textContent = blankSpace;


//Code to handle processing user's guess

//Check user's guess against current word

    //Guess is correct
        //reveal guessed letter in current word

    //Guess is incorrect
        //add guessed letter to letters guessed and decrease guesses remainging
        
        //if guess is repeat of anohter previous incorrect guess letters guessed and guesses remaining are not effected

 //If user wins, increase win count by 1 and post/change image on left side start playing song and show completed guessed word at top of screen
 
 //If wins or loses, reset game after last screen 