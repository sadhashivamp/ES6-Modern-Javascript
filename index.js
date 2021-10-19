// Closures - Closures provide a better, and concise way of writing JavaScript code for the developers and programmers. Closures are created whenever a variable that is defined outside the current scope is accessed within the current scope.
// Synchronous - We can only exicute one thing at a time.
// Asynchronous - we can exicute multiple things at a time and we dont have to finish executing the current thing in order to move on to next one.
// Asynch/Await - The async/await syntax in ES6 use to handle the http promises requests.It makes promices easier to write.async makes function return a promise and awaite makes a function wait for a promise.
// Callbacks - A callback is a function passed as an argument to another function. This techniquemallows a function to call another function. A callback function can run after another function has finished.
// Promises - Promises are used to handle asynchronous operations in JavaScript.
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.
// Destructuring - Destructuring that allows to unpack values from arrays or objects, into individual variables.
// Spread Operator - it takes an iterable objects and expands it into individual elements

// Arrays in Javascript

let arr = [1, 2, 3, 4, 5, 6, 7];

arr.push(8);
console.log(arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift(0);
console.log(arr);

let index = 4;
arr.splice(index, 1);
console.log(arr); //or

arr.splice(4);
console.log(arr);

arr.delete(2);
console.log(arr);

// Closures
function One(call_step2) {
  console.log("Step 1 completed, Please call step 2");
  call_step2();
}
function Two() {
  console.log("Step 2");
}
One(Two);

function hello(name) {
  var message = "hello " + name;
  return function hello() {
    console.log(message);
  };
}
//generate closure
var helloWorld = hello("World");
//use closure
helloWorld();

// Synchronous
console.log("CSS");
console.log("HTML");
console.log("REACTJS");

// Asynchronous
console.log("css");
setTimeout(() => {
  console.log("html");
}, 2000);
console.log("reactJs");

//functions

function value(num1, num2) {
  return num1 + num2;
}
let sum = value(20, 30);
console.log(sum);

// Arrow functions

const value = (num1, num2) => console.log(num1 + num2);
value(20, 30);

//Classes

class test {
  constructor() {
    console.log("i am from constructor");
  }
}
new test();

class test {
  constructor(number1, number2) {
    this.number1 = number1;
    this.number2 = number2;
  }
  multiply() {
    console.log(this.number2 * this.number1);
  }
}
// new test(20, 30).multiply(); or

let ref = new test(20, 30);
ref.multiply();

//Callback
//1.passing 10 as the initial value to step1
//2.if there is no error, then passing the result to step2
//3.if there is no error again, then passing the result to step3
//4.finally, printing the result.

step1(10, function (result1, error) {
  if (!error) {
    step2(result1, function (result2, error) {
      if (!error) {
        step3(result2, function (result3, error) {
          if (!error) {
            console.log("Result " + result3);
          }
        });
      }
    });
  }
});

function step1(value, callback) {
  callback(value + 10, false);
}
function step2(value, callback) {
  callback(value + 10, false);
}
function step3(value, callback) {
  callback(value + 10, false);
}

//2nd example

function One(call_step2) {
  console.log("Step 1 completed, Please call step 2");
  call_step2();
}
function Two() {
  console.log("Step 2");
}
One(Two);

// Using Promices

function step1(value, error) {
  return new Promise((resolve, reject) => {
    if (!error) {
      resolve(value + 10);
    } else {
      reject("Something went wrong");
    }
  });
}
function step2(value, error) {
  return new Promise((resolve, reject) => {
    if (!error) {
      resolve(value + 10);
    } else {
      reject("Something went wrong");
    }
  });
}
function step3(value, error) {
  return new Promise((resolve, reject) => {
    if (!error) {
      resolve(value + 10);
    } else {
      reject("Something went wrong");
    }
  });
}
step1(10, false)
  .then((result1) => step2(result1, false))
  .then((result2) => step2(result2, false))
  .then((result3) => console.log(result3))
  .catch((error) => console.log(error));
// Asynch/Await - The async/await syntax in ES6 use to handle the http promises requests.

// Destructuring - Destructuring that allows to unpack values from arrays or objects, into individual variables.

const person = {
  name: "john",
  age: 25,
  id: 2,
};
const { name, age, id } = person;
console.log(age);

// Spread Operator - it takes an iterable objects and expands it into individual elements

var arr1 = [10, 20, 30, 40, 50];
var arr2 = [60, 70, 80, 90, 100];

var arr3 = [...arr1, ...arr2];
console.log(...arr3, 110, 120);

var obj1 = {
  name: "sadha",
};
var obj2 = {
  ...obj1,
  age: 27,
};

console.log(obj2);

// Map/Filter

//Map Syntax:variable.map((element) => print(element));

var arr = [1, 2, 3, 4, 5, 6];

arr.map((element) => console.log(element));

//Filter Syntax: array.filter((element) => condition)

var array = [1, 2, 3, 4, 5, 6, 7];

let filtered = array.filter((element) => element > 5);
console.log(filtered);

//  ES6-CLASSES

class human {
  constructor() {
    this.age = 25;
  }
  printAge() {
    console.log(this.age);
  }
}
class person extends human {
  constructor() {
    super();
    this.name = "jack";
    this.age = 50;
  }
  printName() {
    console.log(this.name);
  }
}
const persons = new person();
persons.printName();
persons.printAge();

//  ES7-CLASSES

class human {
  age = 25;
  printAge = () => console.log(this.age);
}
class person extends human {
  name = "jack";
  age = 50;
  printName = () => console.log(this.name);
}
const persons = new person();
persons.printName();
persons.printAge();

// Rest Operator = rest operator puts the rest of some specific user-supplied values into a JavaScript array.

const array = (a, b, ...arr) => console.log(arr);

array(10, 20, 30, 40, 50, 60, 70, 80);

//ex:

// Use rest to enclose the rest of specific user-supplied values into an array:
function myBio(firstName, lastName, ...otherInfo) {
  return otherInfo;
}

// Invoke myBio function while passing five arguments to its parameters:
myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male");

//output: ["CodeSweetly", "Web Developer", "Male"];
