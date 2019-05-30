// 1. with var you can define the same variable twice or even more and this may cause problems
// and that is why 'let' was introduced

// 2. var is function scoped, not block scoped. If var is not in a function, new scope is not
// created
console.log(age);
let age = 10;

// 3. If you want to access a variable which is declared with var but is not yet assigned,
// it will work. Let and const keywords eliminate this problem. When a var-variable is declared,
// it is automatically moved to the top of a scope.
// If you want to access a variable which is declared with var and assigned,
// it will work.

// let is just better
