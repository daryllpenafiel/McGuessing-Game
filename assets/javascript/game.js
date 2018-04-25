    //VARIABLES
    var alphabet = ['A','B',"C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var words=["MCMUFFIN","MCNUGGETS","MCGRIDDLE","BIG MAC","FILET O FISH","MCFRIES"]
    var images=["./assets/images/mcmuffin.png","./assets/images/mcnuggets.png","./assets/images/mcgriddle.png","./assets/images/bigmac.png","./assets/images/filetofish.png","./assets/images/mcfries.png","./assets/images/loss3.png"]
    var wins = 0;
    var losses = 0;
    var guesses = 10;
    var remainingGuess = 12;
    var guessedLetters = [""];
    var usedLetters = [""];
    var word_;
    var letterToGuess;
    var userInput = "";
    var pcGuess;
    var lastWord;

    //FUNCTIONS

    //RESET

    function reset() {
        wait(200);
        runPCGuess();
        console.log("new word to guess: " + pcGuess);
        setBlanks ();
        remainingGuess = 12;
        usedLetters=[""];
        document.getElementById("used-letters").innerHTML = "<br>";
        document.getElementById('remaining-guesses').innerHTML= "Remaining guesses: " + remainingGuess;
    };

    //UPDATE MUSIC

    function updateMusicWin () { 
        var snd = new Audio("./assets/music/win.mp3");
        snd.play();
    }

    function updateMusicLoss () {
        var snd = new Audio("./assets/music/loss.mp3");
        snd.play();
    }

    //UPDATE IMAGE
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

    //WAIT
    function wait(ms){
        var start = new Date().getTime();
        var end = start;
        while(end < start + ms) {
          end = new Date().getTime();
       }
     }

    //PC GUESS
    function runPCGuess() {
    pcGuess = words[Math.floor(Math.random() * words.length)];
    }

    runPCGuess();
    console.log(pcGuess);

    //CREATE BLANKS
    function setBlanks () {
        guessedLetters = [];
        for (var i=0; i<pcGuess.length; i++) {
            if (pcGuess[i] == " ") {
            guessedLetters[i] = "&nbsp";
        }   else {
            guessedLetters[i] = "_";
        }}

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
        document.getElementById('listen').innerHTML= "Enter next guess to begin next round...";
        updateMusicWin();
        updateImage();
        reset();
    };
    
    //Update Losses
    function updateLosses() {
        losses++;
        document.getElementById('losses').innerHTML = "Losses: " + losses;
        document.getElementById('old-word').innerHTML = "";
        document.getElementById('listen').innerHTML= "Enter next guess to begin next round...";
        updateMusicLoss();
        sadImage();
        reset();
    };
    
    //Update Remaining Guesses
    function updateRemainingGuesses () {
        remainingGuess--;
        document.getElementById('remaining-guesses').innerHTML = "Remaining Guesses: " + remainingGuess;
        usedLetters.unshift(userInput);
        document.getElementById("used-letters").innerHTML = usedLetters;
    };

    function input() {
        document.onkeyup = function(event) {
        userInput = event.key.toUpperCase();
        console.log(userInput);
        if (alphabet.indexOf(userInput) >= 0 && usedLetters.indexOf(userInput) < 0) {
        document.getElementById('used-letters').innerHTML= "";
        document.getElementById('listen').innerHTML= "";
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
    }}};

    input();