let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 326
};

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = "Animal Farm";

console.log(`${myBook.title} by ${myBook.author}`);

// Challenge area

// name, age, location

let person = {
  name: "Ivan",
  age: 30,
  location: "New Zealand"
};

// name is age and lives in location.

console.log(`${person.name} is ${person.age} and lives in ${person.location}`);

// Increase age by 1 and print message again

person.age = ++person.age;

console.log(`${person.name} is ${person.age} and lives in ${person.location}`);
