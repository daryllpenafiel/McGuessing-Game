    //VARIABLES
   
    var words=["mcmuffin","mcnuggets","mcgriddle","bigmac","filletofish"]
    var wins = 0;
    var losses = 0;
    var guesses = 9;
    var remainingGuess = 10;
    var guessedLetters = [];
    var word_;
    var letterToGuess;
    var userInput = "";
    var pcGuess;

    //FUNCTIONS

    //PC guess
    function runPCGuess() {
    pcGuess = words[Math.floor(Math.random() * words.length)];
    }

    runPCGuess();
    console.log(pcGuess);

    //Create Blanks for Word
    function setBlanks () {
        for (var i=0; i<pcGuess.length; i++) {
            guessedLetters[i] = "_";
        }

        word_ = guessedLetters.join(" ");        
        document.getElementById('current-word').innerHTML = word_;
        console.log(word_);
    }
    
    setBlanks();

    //Update Wins
    function updateWins() {
        wins++;
        document.getElementById('wins').innerHTML = "Wins: " + wins;
    };
    
    //Update Losses
    function updateLosses() {
        losses++;
        document.getElementById('losses').innerHTML = "Losses: " + losses;
    };
    
    //Update Remaining Guesses
    function updateRemainingGuesses () {
        remainingGuess--;
        document.getElementById('remaining-guesses').innerHTML = "Remaining Guesses: " + remainingGuess;
    };

    //Reset
    function reset() {
        runPCGuess();
        console.log("new word to guess: " + pcGuess);
        setBlanks ();
        remainingGuess = 9;
        document.getElementById("used-letters").innerHTML = "Used Letters: ";
        document.getElementById('remaining-guesses').innerHTML= "Remaining guesses: " + remainingGuess;
    };


    function input () {
        document.onkeyup = function(event) {
        userInput = event.key;
        console.log(userInput);
        updateRemainingGuesses ();
        for (i=0; i<pcGuess.length; i++) {
            if (userInput === pcGuess[i]) {
                guessedLetters[i] = userInput;
            } document.getElementById("current-word").innerHTML = guessedLetters.join(" ");
        }
            if (guessedLetters === pcGuess) {
                updateWins();
                reset();
            } else if (remainingGuess == 0) {
            updateLosses ();
            reset();
        }
    }};

    input();
        /*
        guessedLetters.push(userInput);
        document.getElementById("letters").innerHTML = "Your Guesses so far: " + guessedLetters;
            
            if (remainingGuess !== 0) {
                if (userInput == pcGuess) {
                alert("Correct guess!");
                updateWins();
                reset();
                } else {
                updateRemainingGuesses();}
            } else {
                updateLosses();
                reset();
                alert("You lose. Next round!");
            }
    }
};
*/