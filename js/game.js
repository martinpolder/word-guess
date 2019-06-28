
// Array for all possible correct words
var wordBank = ["piss", "flowers"];


// variables
var randomWord = "";
var wordLetters = [];
var blanks = 0;
var lettersAndBlanks = [];
var wrongLetters = [];
var guessesRemaining = 9;


window.onclick = function game() {
// CPU randomly chooses word from the bank for the user to solve 
var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];

// this splits the randomly chosen word into seperate arrays by letter and put into a new array
wordLetters = randomWord.split("");

// blanks is set to the length of the word 
blanks = wordLetters.length;

// loop that makes " _ " for each letter in blanks and pushes it/adds it to the lettersandblanks array
for (var i = 0; i < blanks; i++) {
    lettersAndBlanks.push("_");
    
}

// testing
console.log(randomWord);
console.log(wordLetters);
console.log(blanks);
console.log(lettersAndBlanks);
// it works!

}





