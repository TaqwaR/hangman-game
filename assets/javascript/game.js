
///Inside your *for loop* you would want to run a *conditional statement*. I haven't taken a super close look, but I think what you're looking for is implementing something like this:
// If userKeyInput is equal to randomWord[i] grab the index of that letter and set underScore[*at that index*] equal to userKeyInput. All this should happen inside the for loop. So basically, underScore[i] = userKeyInput.

// Once all the letters in the word are found. The win count should go up by 1, and the other variables should get reset. Guesses should go back to their original numbers, arrays should empty, new word should be chosen. etc. Same deal if the user runs out of guesses except losses go up by 1. Don't forget to display the new values on the page when they change. You don't have to make a startGame function but maybe create a resetGame function to do all the things mentioned above so as not to repeat yourself when you win or lose.

//create an array of beeWords
  var beeWords = [ "wings", "hive", "wax", "drone", "nectar", "queen", "wasp", "sting", "flower", "forage", "comb", "solitary"];

  var beeWordsPlus2 = ["apiary","worker", "pollination", "beyonce", "swarm", "metamorphosis", "royaljelly", "pupa", "buzz"];

/////choose word randomly
  var randomNum = Math.floor(Math.random() * beeWords.length);
  var randomWord = beeWords[randomNum].toUpperCase();


////words and guesses
  var rightWord = [];
  var wrongWord = [];
  var underScore = []; // empty array for underscores


//to test randomWord var
  console.log(randomWord);

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

/////create underscores based on length of random word that we generated
// --> makeUnderscore function start



  function makeUnderscore() {
    for (var i = 0; i < randomWord.length; i++) {
      underScore.push("_");
    }
    document.getElementById('underscores').innerHTML = underScore.join(" ");

    //for testing
    return underScore
  }
//--> makeUnderscore function end

// testing
  console.log(makeUnderscore());

/////get users letter(s) guess
//--> event keyup function start
document.addEventListener('keyup', (function gameKeyup(event) {

  //converts unicode key value into a string
    var userKeyInput = String.fromCharCode(event.keyCode);
    console.log(userKeyInput);

  // if users guess is right
    if (randomWord.indexOf(userKeyInput) > -1) {

    //add to rightWord array
      rightWord.push(userKeyInput);


    //I want this for loop to check for a letter reaccuring more than once
      //If userKeyInput is equal to randomWord[i] grab the index of that letter and set underScore[*at that index*] equal to userKeyInput. All this should happen inside the for loop.
      for (var i = 0; i < underScore.length; i++) {
        underScore[randomWord.indexOf(userKeyInput)] = userKeyInput;

        if (userKeyInput[i] = randomWord[i]) {
          userKeyInput[i] = underScore[underScore.indexOf(i)];
        }
      }

    //replace underscore with right letter
      //underScore[randomWord.indexOf(userKeyInput)] = userKeyInput; <--- place for loop around this for to check for the same letter twice

    //dom manipulation
      underScoreDiv.innerHTML = underScore.join(' ');


      if (underScore.join('') == randomWord) {
        document.removeEventListener('keyup', gameKeyup);
        document.getElementById('game-result').innerHTML = "That's right. You guessed " + randomWord;
        document.getElementById('correct-guesses').innerHTML = ++winCounter;
        console.log(rightWord);
        console.log('you win');
      }

    } else {
    //adds wrong guesses to wrongWord array
      wrongWord.push(userKeyInput);
    //DOM minpulation. joins all wrong guesses together in an array and places it in the    lettersGuessedDiv
      lettersGuessedDiv.innerHTML = wrongWord;
      document.getElementById('guesses-remaining').innerHTML = --guessRemainCounter;

    //if wrongWord array input is greater than 10 create message saying no more guesses, and 'stop' function
      //**This if statement is not working**//
      if (wrongWord.indexOf(userKeyInput) >= 10) {
        document.getElementById('guesses-remaining').innerHTML = "No more guesses"

        document.getElementById('game-result').innerHTML = "*STING*, YOU LOSE."
        document.getElementById('wrong-guesses').innerHTML = ++loseCounter;
        console.log('no guesses remaining');
        document.removeEventListener('keyup', gameKeyup);
      }
      // wrongWord if statement end
    }
    //else statement end

}));

if (document.removeEventListener('keyup', gameKeyup) = true) {
  function restartGame() {
    return randomWord;
    rightWord = [];
    wrongWord = [];
    underScore = [];

    winCounter++;
    loseCounter = 0;
    guessRemainCounter = 10;

  }
}

//--> event keyup function end
