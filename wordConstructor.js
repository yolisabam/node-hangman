var Letter = require('./letterConstructor');

var Word = function(word){
  this.currentword = word;
  this.letterArray = [];
  this.wordDisplay = "";
  this.wordSearch = function(){
    for(i=0; i<this.currentword.length; i++) {
      var letter = new Letter(this.currentword[i]);
      this.letterArray.push(letter);
    } 

  } 
  this.displayWord = function() {
    for(i=0; i<this.letterArray.length; i++) {
      if(this.letterArray[i].letterGuessed === false){
        this.wordDisplay += "_ ";
      } else if (this.letterArray[i].letterGuessed === true){
        this.wordDisplay += this.letterArray[i].guess;
      }
    }
  }
  this.wordSearch();
  this.displayWord();
}
 newWord = new Word("Apple");

 console.log(newWord.wordDisplay);

module.exports = Word;


