
//create an array of beeWords
  var beeWords = ["queen", "worker", "drone", "pollination", "beyonce", "swarm", "metamorphosis", "royaljelly"];

/////choose word randomly
  var randomNum = Math.floor(Math.random() * beeWords.length);
  var randomWord = beeWords[randomNum].toUpperCase();

////words and guesses
  var rightWord = [];
  var wrongWord = [];
  var underScore = []; // empty array for underscores
  var userGuesses = 12;

//to test randomWord var
  console.log(randomWord);

/////Dom manipulation
  var underScoreDiv = document.getElementById('underscores');
  var correctGuessDiv = document.getElementById('correct-guesses');
  var wrongGuessDiv = document.getElementById('wrong-guesses');
  var guessRemainDiv = document.getElementById('guesses-remaining');
  var lettersGuessedDiv = document.getElementById('letters-guessed');


/////create underscores based on length of random word that we generated
// --> makeUnderscore function start
  function makeUnderscore() {
    for (var i = 0; i < randomWord.length; i++) {
      underScore.push("_");
    }
    return underScore;
  }
//--> makeUnderscore function end

// testing
  console.log(makeUnderscore());

//calling startGame function
  startGame();

//defining startGame function
  function startGame() {

/////get users letter(s) guess
//--> event keyup function start
  document.addEventListener('keyup', (function (event) {

  //converts unicode key value into a string
    var userKeyInput = String.fromCharCode(event.keyCode);
    console.log(userKeyInput);

  // if users guess is right
    if (randomWord.indexOf(userKeyInput) > -1) {

    //add to rightWord array
      rightWord.push(userKeyInput);

    //I want this for loop to check for a letter reaccuring more than once
      for (var i = 0; i < underScore.length; i++) {
        underScore[randomWord.indexOf(userKeyInput)] = userKeyInput;
        userKeyInput[i];
      }

    //replace underscore with right letter
      //underScore[randomWord.indexOf(userKeyInput)] = userKeyInput; // place for loop around this for to check for the same letter twice

    //dom manipulation
      underScoreDiv.innerHTML = underScore.join(' ');
      correctGuessDiv.innerHTML = rightWord.join(''); //make this into number of wins if all letters guess correctly.

    //checks if user's word matches guesses
      if (underScore.join('') == randomWord) {
        console.log(rightWord);
        console.log('you win');

  //** need to figure out how to make repeated letter show up and be logged with one keypress **//

      //calling function to restart game after word is guessed.
        startGame()
      }

    } else {
    //adds wrong guesses to wrongWord array
      wrongWord.push(userKeyInput);

    //DOM minpulation. joins all wrong guesses together in an array and places it in the lettersGuessedDiv
      lettersGuessedDiv.innerHTML = wrongWord;

    //if wrongWord array input is greater than 12 create message saying no more guesses, and 'stop' function
      //**This if statement is not working**//
      if (wrongWord.join('') > 12) {
        console.log('no guesses remaining');
        startGame()
      }
      // wrongWord if statement end
    }
    //else statement end

}));
//--> event keyup function end

}
//startGame function end
