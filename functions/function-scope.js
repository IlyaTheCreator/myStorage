// Global scope (convert....., answer1, answer2 )
//// Local scope (fahrenheit, celsius)
//////// Local scope (isFreezing)

let convertFahrenheitToCelsius = function(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;

  if (celsius <= 0) {
    let isFreezing = true;
  }

  return celsius;
};

let answer1 = convertFahrenheitToCelsius(110);
let answer2 = convertFahrenheitToCelsius(80);

console.log(answer1);
console.log(answer2);
