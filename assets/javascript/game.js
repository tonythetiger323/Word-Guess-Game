// Define any possible variables
var chosenWord = "";
var guessesRemaining = 13;
var userGuess = "";
var blankSpace = "";
var lettersGuessed = [];
var wins = 0;
var wordCountDown;
function getElement(element) {
  var selectedElement = document.getElementById(element);
  return selectedElement;
}
//
// -- HTML DOM Elements --
var currentWordP = getElement("currentWord");
var numberRemainingP = getElement("numberRemaining");
var lettersGuessedP = getElement("lettersGuessed");
var winsP = getElement("wins");

function displayChosenWord(word) {
  var result = "";
  for (var i = 0; i < word.length; i++) {
    var j = word[i];
    if (j === " ") {
      result += " ";
    } else {
      result += "_";
    }
  }
  return result;
}

function isWordComplete(word) {
  if (!word.includes("_")) {
    return true;
  }
  return false;
}

function isValidCharacter(keyEvent, letters) {
  // is one character length
  if (keyEvent && keyEvent.length === 1) {
    // A - Z character
    if (keyEvent >= "A" && keyEvent <= "Z") {
      // its not in the letters []
      if (!letters.includes(keyEvent)) {
        return true;
      }
    }
  }
  return false;
}

function newGame(word) {
  chosenWord = word;
  guessesRemaining = 13;
  userGuess = "";
  blankSpace = "";
  lettersGuessed = [];
  console.log("New Game", {
    chosenWord,
    guessesRemaining,
    userGuess,
    blankSpace,
    lettersGuessed
  });

  numberRemainingP.textContent = guessesRemaining;
  winsP.textContent = wins;

  //
  // -- Game "Simulation" --

  // Have computer select a word to be guessed and display empty lines



  wordCountDown = chosenWord.length;


  // Compute the new ___ ___ and display in browser
  blankSpace = displayChosenWord(chosenWord);
  updateTextContent(currentWordP, blankSpace);


}

// Code to handle processing user's guess
newGame(selectRandomWord());
document.onkeyup = function (event) {
  // get the letter from the event
  var userGuess = event.key.toUpperCase();

  // if letter has not been guessed
  if (
    isValidCharacter(userGuess, lettersGuessed)
    // userGuess >= "A" &&
    // userGuess <= "Z" &&
    // !lettersGuessed.includes(userGuess)
  ) {
    // the letter is not included in the lettersGuessed array
    // decrement guessing count

    // add to the letters guessed
    lettersGuessed.push(userGuess);

    // see if the letter is in the word
    if (chosenWord.includes(userGuess)) {
      // make it show in the word
      for (var i = 0; i < chosenWord.length; i++) {
        if (userGuess === chosenWord[i]) {
          blankSpace =
            blankSpace.substring(0, i) +
            userGuess +
            blankSpace.substring(i + 1);

          // decrement word count (remaining unguessed letters)
        }
      }
    } else {
      guessesRemaining--;
    }

    var completed = isWordComplete(blankSpace);
    if (completed) {
      wins++;

      updateTextContent(winsP, wins);
      var newWord = selectRandomWord();
      newGame(newWord);
    } else if (guessesRemaining === 0) {
      var newWord = selectRandomWord();
      newGame(newWord);
    }
  }
  currentWordP.textContent = blankSpace;
  lettersGuessedP.textContent = lettersGuessed;
  numberRemainingP.textContent = guessesRemaining;
};
//Check user's guess against current word

//Guess is correct
//reveal guessed letter in current word

//Guess is incorrect
//add guessed letter to letters guessed and decrease guesses remainging

//if guess is repeat of anohter previous incorrect guess letters guessed and guesses remaining are not effected

//If user wins, increase win count by 1 and post/change image on left side start playing song and show completed guessed word at top of screen

//If wins or loses, reset game after last screen
