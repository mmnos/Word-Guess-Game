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

  console.log(randWord);

  let getWord = () => {

    for ( i = 0; i < randWord.length; i++ ) {

      answer[i] = "_";

      $(".randWord").html(answer.join(" "));

    }

  };

  getWord();

  $(document).on('keyup', (e) => {

    if (e.isComposing || e.keyCode === 229) {
      return;
    }

    guessesLeft -= 1;

    userGuess = e.key.toLowerCase();

    correctGuess = randWord.indexOf(userGuess);

    if ( correctGuess > -1 ) {

      for ( j = 0; j < answer.length; j++ ) {

        if ( randWord[j] === userGuess ) {

          answer[j] = userGuess;

        }

      }

      $(".randWord").html(answer.join(" "));

    } else {



    }

  });

});