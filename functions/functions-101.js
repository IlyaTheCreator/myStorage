// Function - input (argument(s)), code, output (return value)

let greetUser = function() {
  console.log("Welcome user!");
};

greetUser();
greetUser();
greetUser();

let square = function(num) {
  let result = num * num;
  return result;
};

let value = square(3);
let otherValue = square(10);
console.log(value);
console.log(otherValue);

//Challenge Area

//convertFahrenheitToCelsius

let convertFahrenheitToCelsius = function(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;

  return celsius;
};

// Call a couple of times (32 -> 0) (68 -> 20)

let answer1 = convertFahrenheitToCelsius(110);
let answer2 = convertFahrenheitToCelsius(80);

// Print the converted values

console.log(answer1);
console.log(answer2);
