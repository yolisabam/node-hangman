var randomWords = require('random-words');

var inquirer = require('inquirer')

var Word = require('./wordConstructor')

var hangmanWords = randomWords(20);

var randomIndex = Math.floor(Math.random() * 20);

var currentWord = hangmanWords[randomIndex];





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
      var newWord = new Word(chooseWord());
      console.log(newWord)
    } else {
      console.log("Ok, bye");
    }
  });
}

function chooseWord() {
  return hangmanWords[Math.floor(Math.random) * 20];
};


startGame();
