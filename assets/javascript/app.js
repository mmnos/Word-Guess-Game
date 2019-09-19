let words = [
  "life", "flowers", "hope", "travel", "happiness", "sadness", "lost", "journey",
  "love", "smile", "time", "heals"
];

let randWord = words[Math.floor(Math.random() * words.length)];

let answer = [];

let lettersGuessed = [];

let wins = 0;
let losses = 0;
let guessesLeft = 10;
let userGuess;
let correctGuess;

$(document).ready(function() {

  let getWord = () => {

    $("#randWord").empty();
    answer = [];

    randWord = words[Math.floor(Math.random() * words.length)];
    console.log(randWord);
    for ( i = 0; i < randWord.length; i++ ) {

      answer[i] = "_";

      $("#randWord").html(answer.join(" "));

    }

  };

  $("#emptyBtn").on("click", (e) => {
    $("#randWord").empty();
  })

  let displayStats = () => {

    $("p.wins").html(`Wins : ${wins}`);
    $("p.losses").html(`Losses : ${losses}`);
    $("p.guesses").html(`Guesses left : ${guessesLeft}`);

  }

  let checkAnswer = () => {

    if (!answer.includes("_")) {

      resetGame(true);

    }

    if ( guessesLeft === 0 ) {

      resetGame(false);

    }

  };

  let resetGame = (bool) => {

    if (bool) {
      wins++
    } else losses++

    guessesLeft = 10;
    displayStats();
    getWord();

  };

  displayStats();
  getWord();

  $(document).on('keyup', (e) => {

    if (e.isComposing || e.keyCode === 229) {
      return;
    }

    guessesLeft--;

    userGuess = e.key.toLowerCase();

    correctGuess = randWord.indexOf(userGuess);

    if ( correctGuess > -1 ) {

      // for ( j = 0; j < answer.length; j++ ) {

      //   if ( randWord[j] === userGuess ) {

      //     answer[j] = userGuess;

      //   }

      // }

      answer.forEach((letter, index) => {
        randWord[index] === userGuess && (answer[index] = userGuess);
      });

      $("p#randWord").html(answer.join(" "));

    }

    $("p.guesses").html(`Guesses left : ${guessesLeft}`);

    checkAnswer();

  });

});