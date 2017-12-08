
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


////retstart function
  // function restartGame() {
  //   rightWord = [];
  //   wrongWord = [];
  //   underScore = [];
  //
  //   winCounter++;
  //   loseCounter = 0;
  //   guessRemainCounter = 10;
  //
  //   return randomWord;
  //
  // }


/////create underscores based on length of random word that we generated
  function makeUnderscore() {
    for (var i = 0; i < randomWord.length; i++) {
      underScore.push("_");
    }
    document.getElementById('underscores').innerHTML = underScore.join(" ");

    //for testing
    return underScore
  }

// testing
  console.log(makeUnderscore());

/////get users letter(s) guess
document.addEventListener('keyup', (function gameKeyup(event) {

  //converts unicode key value into a string
    var userKeyInput = String.fromCharCode(event.keyCode);
    console.log(userKeyInput);

  // if users guess is right
    if (randomWord.indexOf(userKeyInput) > -1) {

    //add to rightWord array
      rightWord.push(userKeyInput);


    //I want this for loop to check for a letter reaccuring more than once
      //replace underscore with right letter
      for (var i = 0; i < underScore.length; i++) {
        underScore[randomWord.indexOf(userKeyInput)] = userKeyInput;

        if (userKeyInput[i] = randomWord[i]) {
          userKeyInput[i] = underScore[underScore.indexOf(i)];
        }
      }


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

restartGame()
