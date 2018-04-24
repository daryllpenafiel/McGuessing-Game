    //VARIABLES
   
    var words=["MCMUFFIN","MCNUGGETS","MCGRIDDLE","BIGMAC","FILETOFISH","MCFRIES"]
    var images=["./assets/images/mcmuffin.png","./assets/images/mcnuggets.png","./assets/images/mcgriddle.png","./assets/images/bigmac.png","./assets/images/filetofish.png","./assets/images/mcfries.png","./assets/images/loss3.png"]
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

    //Update image
    function updateImage() {
        if (pcGuess == words[0]) {
            document.getElementById('picture').src=images[0]; 
        } else  if (pcGuess == words[1]) {
            document.getElementById('picture').src=images[1]; 
        }else  if (pcGuess == words[2]) {
            document.getElementById('picture').src=images[2]; 
        }else  if (pcGuess == words[3]) {
            document.getElementById('picture').src=images[3]; 
        }else  if (pcGuess == words[4]) {
            document.getElementById('picture').src=images[4]; 
        }else  if (pcGuess == words[5]) {
            document.getElementById('picture').src=images[5]; 
    }}

    function sadImage() {
        document.getElementById('picture').src=images[6]; 
    }


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
        updateImage();
        reset();
    };
    
    //Update Losses
    function updateLosses() {
        losses++;
        document.getElementById('losses').innerHTML = "Losses: " + losses;
        document.getElementById('old-word').innerHTML = "";
        sadImage();
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