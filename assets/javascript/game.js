    //VARIABLES
   
    var words=["MCMUFFIN","MCNUGGETS","MCGRIDDLE","BIGMAC","FILETOFISH"]
    var wins = 0;
    var losses = 0;
    var guesses = 10;
    var remainingGuess = 10;
    var guessedLetters = [""];
    var word_;
    var letterToGuess;
    var userInput = "";
    var pcGuess;
    var lastWord;

    //FUNCTIONS

    //Reset
    function reset() {
        wait(200);
        runPCGuess();
        console.log("new word to guess: " + pcGuess);
        setBlanks ();
        remainingGuess = 10;
        document.getElementById("used-letters").innerHTML = "Used Letters: ";
        document.getElementById('remaining-guesses').innerHTML= "Remaining guesses: " + remainingGuess; 
    };

    //Wait
    function wait(ms){
        var start = new Date().getTime();
        var end = start;
        while(end < start + ms) {
          end = new Date().getTime();
       }
     }

    //PC guess
    function runPCGuess() {
    pcGuess = words[Math.floor(Math.random() * words.length)];
    }

    runPCGuess();
    console.log(pcGuess);

    //Create Blanks for Word
    function setBlanks () {
        guessedLetters = [];
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
        document.getElementById("current-word").innerHTML = pcGuess;
        document.getElementById('wins').innerHTML = "Wins: " + wins;
        document.getElementById('old-word').innerHTML = pcGuess;
        reset();
    };
    
    //Update Losses
    function updateLosses() {
        losses++;
        document.getElementById('losses').innerHTML = "Losses: " + losses;
        document.getElementById('old-word').innerHTML = "";
        reset();
    };
    
    //Update Remaining Guesses
    function updateRemainingGuesses () {
        remainingGuess--;
        document.getElementById('remaining-guesses').innerHTML = "Remaining Guesses: " + remainingGuess;
    };

    function input() {
        document.onkeyup = function(event) {
        userInput = event.key;
        console.log(userInput);
        updateRemainingGuesses ();
        for (i=0; i<pcGuess.length; i++) {
            if (userInput == pcGuess[i]) {
                guessedLetters[i] = userInput;
                
            } document.getElementById("current-word").innerHTML = guessedLetters.join(" ");
        }
            if (!guessedLetters.includes("_")) {
                updateWins();
            } else if (remainingGuess == 0) {
            updateLosses();
    }
    }};

    input();