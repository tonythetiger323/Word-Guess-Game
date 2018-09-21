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
];

//
// -- Functions --

function createNewGame() {
  return {
    word: "Hello World",
    guesses: [],
    maxGuesses: 13
  };
}

function guessesReminaing(maxAmountOfGuesses, currentListOfGuesses) {
  return maxAmountOfGuesses - currentListOfGuesses.length;
}

function updateTextContent(paragraphVariable, value) {
  paragraphVariable.textContent = value;
}

function selectRandomWord() {
  return phrases[Math.floor(Math.random() * phrases.length)];
}

function log(title, message) {
  console.log(title, message);
}

function displayChosenWord(word) {
  var result = "";
  for (var i = 0; i < word.length; i++) {
    var j = word[i];
    if (j === " ") {
      result += " ";
      //   wordCountDown--;
    } else {
      result += "_";
    }
  }
  //   log("Word Count Down", wordCountDown);
  return result;
}
