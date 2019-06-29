
// Array for all possible correct words
var wordBank = ["piss", "flowers"]


// variables
var randomWord = "";
var wordLetters = [];
var blanks = 0;
var lettersAndBlanks = [];
var wrongLetters = [];
var guessesRemaining = 9;


function Game() {
    // CPU randomly chooses word from the bank for the user to solve 
    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];

    // this splits the randomly chosen word into seperate arrays by letter and put into a new array
    wordLetters = randomWord.split("");

    // blanks is set to the length of the word 
    blanks = wordLetters.length;

    // loop that makes " _ " for each letter in blanks and pushes it/adds it to the lettersandblanks array
    for (var i = 0; i < blanks; i++) {
        lettersAndBlanks.push("_");

    }

    document.getElementById("currentword").innerHTML = " " + lettersAndBlanks.join("  ");

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


function checkLetters(letter) {
    var letterInWord = false;
    //if the generated randomword is equal to the letter entered... then variable is true
    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] === letter) {
            letterInWord = true;
        }
    }
    //if letterInWord (false)
    if (letterInWord) {
        //check each letter to see if it matches word
        for (var i = 0; i < blanks; i++) {
            if (randomWord[i] === letter) {
                lettersAndBlanks[i] = letter;
            }
        }
    }
    //otherwise, push the incorrect guess in the wrong guesses section, and reduce remaining guesses
    else {
        wrongLetters.push(letter);
        guessesRemaining--;
    }
    
}




// check to see if the player won

function complete() {

    if (wordLetters.toString() == lettersAndBlanks.toString()) {
        reset()
    }


    else if (guessesRemaining === 0) {

        reset()
    }


    document.getElementById("currentword").innerHTML = " " + lettersAndBlanks.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;

    // test log
    // console.log(" " + lettersAndBlanks.join(" "));
    // console.log(" " + guessesRemaining);

}



Game()

document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase()

    checkLetters(guesses);

    complete();

    // console.log(guesses);

    // console.log(" " + wrongLetters.join(" "))


    document.getElementById("playerguesses").innerHTML = "  " + wrongLetters.join("  ");



}