var randomWords = require('random-words');

var inquirer = require('inquirer')

var Word = require('./wordConstructor')

var hangmanWords = randomWords(20);

var randomIndex = Math.floor(Math.random() * 20);

var currentWord = hangmanWords[randomIndex];

var guessesRemaining = 15;

var wrongGuesses = [];

var newWord = {};

function startGame(){
  inquirer.prompt([
  {
    name:"playgame",
    type:"confirm",
    message:"Do you Want to play Hangman?",
    default: true
  }    
  ]).then(function(response){
    if (response.playgame === true) {
     newWord = new Word(currentWord);
     console.log(newWord.currentword)
     console.log(newWord.wordDisplay);
     console.log(guessesRemaining + " guesses remaining");
     swapFunction();
    } else {
      console.log("Ok, bye");
    }
  });
}

function chooseWord() {
  return hangmanWords[(Math.floor(Math.random) * 20)];
};

function swapFunction() {
  inquirer.prompt([
    {
     name: "guess",
     type: "input",
     message: "Guess a letter" 
    }
    ]).then(function(response){ 
      if(currentWord.indexOf(response.guess)!== -1 && guessesRemaining > 0){
        // var newLetter = new Letter(response.guess);
        for (index in newWord.letterArray) {
          if(response.guess === newWord.letterArray[index].guess) {
            var newLetter = newWord.letterArray[index];
            newLetter.letterGuessed = true;
            newLetter.letterCheck();
            console.log(newLetter);
          }
        }
        newWord.displayWord();
        console.log(newWord.wordDisplay);
        guessesRemaining--;
        console.log(guessesRemaining + " guesses remaining!");
        swapFunction();
      } else if (response.guess.indexOf(currentWord) < 0 && guessesRemaining > 0) {
        console.log("Wrong Answer!");
        wrongGuesses.push(response.guess);
        guessesRemaining--;
        swapFunction();

      } else{
        return;
        console.log("game over!");
        startGame();
      }
    })
  }

// End Game Logic
// When the full word has been guessed OR the user is out of guesses, run the startGame logic again to ask if they want to play
// If the answer is yes, create a new game, and reset the guesses remaining
// If the answer is no, end the game

startGame();
