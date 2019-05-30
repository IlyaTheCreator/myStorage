// Multiple arguments
let add = function(a, b, c) {
  return a + b + c;
};

let result = add(10, 1, 5);
console.log(result);

// Default arguments
let getScoreText = function(name = "Anonymous", score = 0) {
  return `Name: ${name} - Score: ${score}`;
};

let scoreText = getScoreText(undefined, 99);
console.log(scoreText);

// Challenge area
// A 25% tip on $40 would be $10

let getTip = function(total, tipPercent = 0.2) {
  return `A ${tipPercent * 100}% tip on $${total} would be like $${total *
    tipPercent}`;
};

let tip = getTip(1241, 0.91);
console.log(tip);
