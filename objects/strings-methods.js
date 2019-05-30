let name = "  Andrew Mead ";

// Length property
console.log(name.length);

// Convert to upper case method
console.log(name.toUpperCase());

// Convert to lower case method
console.log(name.toLowerCase());

// Includes method
let password = "abc123asd098";
console.log(password.includes("password"));

// Trim
console.log(name.trim());

// Challenge area

// isValidPassword
// return true if length is more that 8 and it doesn't contain the word password

let isValidPassword = function(password) {
  return password.length > 8 && !password.includes("password");
};

console.log(isValidPassword("asdfp"));
console.log(isValidPassword("abc123!@#$%^&"));
console.log(isValidPassword("asdfpasdfapassword"));
