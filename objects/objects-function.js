let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 326
};

let otherBook = {
  title: "A Peoples History",
  author: "Howard Zinn",
  pageCount: 723
};

let getSummary = function(book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`
  };
};

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);

// Challenge area
// Create function - take fahrenheit in - return object with all three

let calcTemp = function(fahrenheit) {
  return {
    fahrenheit: fahrenheit,
    kelvin: `${(fahrenheit + 459.67) * (5 / 9)} degrees in kelvin`,
    celsius: `${(fahrenheit - 32) * (5 / 9)} degrees in celsius`
  };
};

let outcome = calcTemp(50);

console.log(outcome);
