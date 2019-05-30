const word = document.getElementById("word");
const amount = document.getElementById("amount");
let game1

// word.textContent = game1.puzzle;
// amount.textContent = game1.statusMessage;

window.addEventListener("keypress", e => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  render()
});

const render = () => {
  word.innerHTML= '';
  amount.textContent = game1.statusMessage;

  game1.puzzle.split('').forEach((character) => {
    const span = document.createElement('span')
    span.textContent = character
    word.appendChild(span)
  })
}  

const startGame = async () => {
  const puzzle = await getPuzzle('2')
  game1 = new Hangman(puzzle, 5)
  render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

// getPuzzle('2').then((puzzle) => {
//   console.log(puzzle)
// }).catch((err) => {
//   console.log(`Error: ${err}`)
// })

// getCurrentCountry().then((country) => {
//   console.log(`You are currently in: ${country.name}`)
// }).catch((error) => {
//   console.log(error)
// })