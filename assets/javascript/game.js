
/////create array beeWords
var beeWords = [ "wings", "hive", "wax", "drone", "nectar", "wasp", "sting", "flower", "forage", "comb", "solitary"];

var beeWordsPlus2 = ["apiary","worker", "pollination", "beyonce", "swarm", "metamorphosis", "royaljelly", "pupa", "buzz"];

/////choose word randomly
var randomNum;
var randomWord;

////words and guesses
var rightWord = [];
var wrongWord = [];
var underScore = [];

/////Dom manipulation
var resultDiv = document.getElementById('game-result');
var underScoreDiv = document.getElementById('underscores');
var correctGuessDiv = document.getElementById('correct-guesses');
var wrongGuessDiv = document.getElementById('wrong-guesses');
var guessRemainDiv = document.getElementById('guesses-remaining');
var lettersGuessedDiv = document.getElementById('letters-guessed');

/////Counters
var winCounter = 0;
var loseCounter = 0;
var guessRemainCounter = 10;

//Group debugging session* - defining random word fucntion
function randomWordGenerator() {
  randomNum = Math.floor(Math.random() * beeWords.length);
  randomWord = beeWords[randomNum].toUpperCase();
  console.log(randomWord);
}

//Group debugging session* - calling chooseLetter function
chooseLetter();

/////create underscores based on length of random word that we generated
function makeUnderscore() {
  randomWordGenerator()
  for (var i = 0; i < randomWord.length; i++) {
    underScore.push("_");
  }

  document.getElementById('underscores').innerHTML = underScore.join(" ");

  //for testing
  //return underScore // remove this and see if it works
}

// testing
console.log(makeUnderscore());

function chooseLetter() {

/////get users letter(s) guess
document.addEventListener('keyup', (function gameKeyup(event) {

//converts unicode key value into a string
  var userKeyInput = String.fromCharCode(event.keyCode);
  console.log(userKeyInput);

// if users guess is right
  if (randomWord.indexOf(userKeyInput) > -1) {
    rightWord.push(userKeyInput);

//checking for more than one occurence of a letter
    for (var i = 0; i < underScore.length; i++) {
      underScore[randomWord.indexOf(userKeyInput)] = userKeyInput;
      if (userKeyInput[i] = randomWord[i]) {
        userKeyInput[i] = underScore[underScore.indexOf(i)];
      }
    }

//DOM manipulation - joining each generated underscore/typed letter with a space between them.
  underScoreDiv.innerHTML = underScore.join(' ');

//If the letters typed in the underscore spaces jointly equal the random word, stop keyUp events and display the following
    if (underScore.join('') == randomWord) {
      document.removeEventListener('keyup', gameKeyup);
      document.getElementById('game-result').innerHTML = "That's right. You guessed " + randomWord;
      document.getElementById('correct-guesses').innerHTML = ++winCounter;
      console.log(rightWord);
      console.log('you win');
    }

// if the joint letters do NOT equal the random word
    } else {

//adds wrong guesses to wrongWord array
      wrongWord.push(userKeyInput);

//DOM minpulation. joins all wrong guesses together in an array and places it in the lettersGuessedDiv
      lettersGuessedDiv.innerHTML = wrongWord;
      document.getElementById('guesses-remaining').innerHTML = --guessRemainCounter;

//if wrongWord array input reaches 10, create message saying no more guesses, and 'stop' keyUp events
      if (wrongWord.indexOf(userKeyInput) == 10) {
        document.getElementById('guesses-remaining').innerHTML = "No more guesses"
        document.getElementById('game-result').innerHTML = "*STING*, YOU LOSE."
        document.getElementById('wrong-guesses').innerHTML = ++loseCounter;
        console.log('no guesses remaining');
        document.removeEventListener('keyup', gameKeyup);
      }

    }

}));

};

////restart game on click function
document.getElementById('new-word').addEventListener("click", (function restartGame(event) {

  randomWordGenerator()
  chooseLetter()

  rightWord = [];
  wrongWord = [];
  underScore = [];

  loseCounter = 0;
  guessRemainCounter = 10;
  //gameKeyup();
  makeUnderscore();

  wrongGuessDiv.innerHTML = loseCounter;
  guessRemainDiv.innerHTML = guessRemainCounter;
  lettersGuessedDiv.innerHTML = wrongWord;
  underScoreDiv.innerHTML = underScore.join(" ");
  resultDiv.innerHTML = "Type a letter to begin";



}));
