# HangMan

### Overview

A simple hangman game built with Node.JS

### Instructions
Run game.js file in terminal to play game


## Built With
* Node JS
* Random Words - NPM Package for generating random words
* Inquirer - NPM Package for prompt, retrieving user info
* Javascript

## Relevent Code Snippets
My motivation was to keep the code as clean as possible and use costructors to hold the logic for reading words and letters. The main page was where I could manipulate this code to actually create a game of hangman.
```javascript
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
```
## Version Control
I used git for version control.


## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgements
* Mahthab Ghez, Sahil Najeeb and Justin Wong
* Chi Lu, Garret Gruessing & Jerome Chennette

