
// Array for all possible correct words
var wordBank = ["piss", "flowers"];


// variables
var randomWord = " ";
var wordLetters = [];
var blanks = 0;
var lettersAndBlanks = [];
var wrongLetters = [];
var guessesRemaining = 9;


function Game() {
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
    // console.log(randomWord);
    // console.log(wordLetters);
    // console.log(blanks);
    // console.log(lettersAndBlanks);
    // // it works!

}

// reset function
function reset() {
    guessesRemaining = 9;
    wrongLetters = [];
    lettersAndBlanks = [];
    Game()

}


// check to see if the guess matches the random word
function checkLetters(letter) {
    
    var wordLetters = false;
    // if the randomword we generated is equal to the guess
    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] == letter) {
            wordLetters = true;
        }
    }
    



if (wordLetters) {
    // checks each letter to see if it matches the word
    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] == letter) {
            lettersAndBlanks[i] = letter;
        }
    }
    }

else {
    wrongLetters.push(letter);
    guessesRemaining--;
}


}



// check to see if the player won

function complete () {

    if (wordLetters.toString() == lettersAndBlanks.toString()) {
        reset()
    }


    else if (guessesRemaining === 0) {

        reset()
    }
// test log
    console.log(" " + lettersAndBlanks.join(" "));
    console.log(" " + guessesRemaining);

}



Game ()

document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase()

    checkLetters(guesses);

    complete();

    console.log(guesses);

    console.log(" " + wrongLetters.join(" "));
}