
// Hangman pseudocode

//Game instructions
  //type in letters to guess the random word.

//Wins
  //Logs how many words that the user guessed correctly, without running out of letter turns
  //When word is guessed, the answer is displayed at the top, and a photo appears.
  //function repeats itself for the next word.

//Current word
  //Generates the word that the user must guess

//Guesses remaining
  //Shows the user how many guesses they have for a given word

//Letters already guessed
  //displays all of the letters/keys that the user has already pressed that were NOT part of the word
  //if the letter typed in IS in word, then it is moved to be displayed in the appropriate empty space.


//Array of words that we'll use--
  //var beeWords = ["queen", "worker", "drone", "pollination", "beyonce", "swarm", "metamorphosis", "royaljelly"]


  //correctGuesses
  //wrongGuesses
  //guessesRemaining

  // input -- user is asked to guess a letter.
  // user's input is then compared to a string of letters.
  //if the user's input matches any of the letters in the string -- the matching letter will be displayed in blank(s).
  //if the user's input does not match any of the letter in the string -- the letter that they typed in will be displayed in the 'letters guessed already' section.
    //once guessed, a letter cannot be guessd again
  //after each time the user plays a letter, the counter for 'number of guesses remaining' will decrease by 1



///////////////////////////////////////////////////////////

//create an array of beeWords
var beeWords = ["queen", "worker", "drone", "pollination", "beyonce", "swarm", "metamorphosis", "royaljelly"];

//choose word randomly
var randomNum = Math.floor(Math.random() * beeWords.length);
var randomWord = beeWords[randomNum];
// empty array for underscores
var underScore = [];
console.log(randomWord);

//create underscores based on length of random word that we generated
function makeUnderscore() {
  for (var i = 0; i < randomWord.length; i++) {
    underScore.push("_");
  }
  return underScore;
}

console.log(makeUnderscore());

//get users guess
document.addEventListener('keyup', (function event() {
  //console.log(event);
  //converts unicode key value into a character
  var userKeyInput = event.keyCode;
  console.log(userKeyInput);
}));


  //store user's input
  //check if right
  //if right display in blank space
  //if wrong, display in 'letters guessed'
  //don't allow a letter already guessed to be entered again


//check if guess is right
//if right push to right array
//if wrong push to wrong array
