// The map() method creates a new array with the results of
// calling a provided function on every element in the calling array.

class Hangman {
  constructor(word, guessesRemaining) {
    this.word = word.toLowerCase().split("");
    this.guessesRemaining = guessesRemaining;
    this.guessedLetters = [];
    this.status = "playing";
    // this.statusMessage = '';
    // this.puzzle = '';
  }
  get puzzle() {
    let puzzle = "";

    this.word.forEach(letter => {
      if (this.guessedLetters.includes(letter) || letter === " ") {
        puzzle += letter;
      } else {
        puzzle += "*";
      }
    });

    return  puzzle;
  }
  get statusMessage() {
    if (this.status === "playing") {
      return  `Guesses left: ${this.guessesRemaining}`;
    } else if (this.status === "failed") {
      return  `Nice try! The word was '${this.word.join("")}'`;
    } else {
      return  "Great work! You guessed the word!";
    }
  }
  makeGuess(guess) {
    if (this.status === "playing") {
      guess = guess.toLowerCase();

      if (!this.guessedLetters.includes(guess)) {
        this.guessedLetters.push(guess);
      }

      if (!this.word.includes(guess)) {
        this.guessesRemaining--;
      }
    }

    this.calculateStatus();
  }
  calculateStatus() {
    //1st solution    // const lettersUnguessed = this.word.filter((letter) => {
    //     return !this.guessedLetters.includes(letter)
    // })

    // const finished = lettersUnguessed.length === 0

    //2nd solution    // let finished = true

    // this.word.forEach((letter) => {
    //     if (this.guessedLetters.includes(letter)) {

    //     } else {
    //         finished = false
    //     }
    // })

    //3rd solution

    const finished = this.word.every(letter =>
      this.guessedLetters.includes(letter) || letter === ' '
    );

    if (this.guessesRemaining === 0) {
      this.status = "failed";
    } else if (finished) {
      this.status = "finished";
    } else {
      this.status = "playing";
    }
  }
}
