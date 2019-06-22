
// Array for all possible correct words
var wordBank = ["piss"];

// CPU randomly chooses word from the bank for the user to solve 
var wordSolve = wordBank[Math.floor(Math.random() * wordBank.length)];


// variable for wrong guesses, starts at 0
var wrongLetter = 9;



// variables that reference html

// var randomWord document. not finished




// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;






// This loops the function so the user can play again with another randomly chosen word
var answerArray = [];
for (var i = 0; i < wordSolve.length; i++) {
    answerArray[i] = "_"
}



while (remainingLetters > 0) {
    // Show the player their progress alert(answerArray.join(" "));

    console.log(answerArray.join(" "));

    // Get a guess from the player


    if (userGuess ) {

     else if (userGuess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        // Update the game state with the guess



        // The end of the game loop
    }
    };



};






    //  Console display 
    console.log(answerArray.join(" "))