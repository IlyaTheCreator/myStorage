let num = 103.941;

console.log(num.toFixed(2));

console.log(Math.round(num));
console.log(Math.floor(num)); // round down (103 is expected)
console.log(Math.ceil(num)); // round up (104 is expected)

let min = 0;
let max = 1;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min; // how to define a range whereTo use Math.random
// 0 - 10
console.log(randomNum);

// Challenge area
// 1 - 5 - true if correct - false if not correct

// A make-guess game

let makeGuess = function(num) {
  let min = 1;
  let max = 5;
  let randomNum = Math.floor(Math.random() * (max - min + 1));

  return num === randomNum;
};

console.log(makeGuess(4));
