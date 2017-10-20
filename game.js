var randomWords = require('random-words');

var inquirer = require('inquirer');

var Word = require('./wordConstructor');

var Letter = require('./letterConstructor');

var hangmanWords = randomWords(20);

var randomIndex = Math.floor(Math.random() * 20);

var currentWord = hangmanWords[randomIndex];

var guessesRemaining = 15;

var wrongGuesses = [];

var chosenWord = {};





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
     chosenWord = new Word(currentWord);
     console.log(chosenWord.wordDisplay);
     swapFunction();
     console.log(guessesRemaining)
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
      if(currentWord.indexOf(response.guess)!==-1 && guessesRemaining > 0){
        var newLetter = new Letter(response.guess);
        newLetter.letterGuessed = true;
        newLetter.letterCheck();
        guessesRemaining--;
        console.log(guessesRemaining + " guesses remaining!");
        swapFunction();
      } else if (currentWord.indexOf(response.guess) < 0 && guessesRemaining > 0) {
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


startGame();
