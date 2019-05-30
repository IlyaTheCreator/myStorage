// functions that can be used with 'new' operator are
// constructor functions

// The 'new' operator creates new empty object for this particular instance and gives an access
// to it via 'this' in constructor function

// this functions allow us to customize individual
// instances (change objects' properties' values on fly)

// Prototypal inheritance

// Prototype is an object, elements of which are accessible for all instances of a constructor
// function


// myPerson --> Person.prototype --> Object.prototype --> null

class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }
  getBio() {
    let bio = `${this.firstName} is ${this.age}.`;

    this.likes.forEach(like => {
      bio += ` ${this.firstName} likes ${like}`;
    });

    return bio;
  }
  set fullName(fullName) {
    const names = fullName.split(" ");
    this.firstName = names[0];
    this.lastName = names[1];
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

class Employee extends Person {
  constructor(firstName, lastName, age, position, likes) {
    super(firstName, lastName, age, likes)
    this.position = position
  }
  getBio() {
    return `${this.fullName} is a ${this.position}.`
  }
  getYearsLeft() {
    return 65 - this.age
  }
}

class Student extends Person {
  constructor(firstName, lastName, age,  grade, likes) {
    super(firstName, lastName, age, likes)
    this.grade = grade
  }
  getBio() {
    if(this.grade >= 70) {
      return `${this.firstName} is passing the class`
    } else {
      return `${this.firstName} is not passing the class`
    }
  }
  updateGrade(toChange) {
    this.grade += toChange 
  }
}

const student = new Employee('Ivan', 'Petrov', 15, 'Teacher', ['biking'])
student.fullName = 'Clancey Turner'
console.log(student.getBio())
console.log(student.getBio())