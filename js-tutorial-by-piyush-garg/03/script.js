// Datatypes

// Numbers
console.log("Numbers");
let num0 = 30;
let num1 = 3.14;

console.log(num0 + num1);

// Strings
console.log("Strings");
const firstName = "Hashir";
const lastName = "Sajid";
const numName = "58200";

console.log(firstName + " " + lastName + " " + numName);

// Boolean 1 (true) | 0 (false)
// JS 1 = true | 0 = false
// JS true | false ???
// true = 1 | false = 0

console.log("Boolean");
let isLoggedIn = true;
console.log(isLoggedIn);
isLoggedIn = false;
console.log(isLoggedIn);

let isLoggedOut = true;
console.log(isLoggedOut + 10);
isLoggedOut = false;
console.log(isLoggedOut + 10);

// Null
console.log("Null");
let lastLoginDate = null;
console.log(lastLoginDate);

lastLoginDate = 10;
console.log(lastLoginDate);

// Undefined
console.log("Undefined");
let LoginDate = undefined;
console.log(LoginDate);

LoginDate = 10;
console.log(LoginDate);

// Objects (differ from other languages)
console.log("Objects");
const person0 = {
  firstName: "Hashir",
  lastName: "Sajid",
  age: 22,
  isLoggedIn: true,
};

console.log(person0);
console.log(person0.firstName);
console.log(person0.age);

const person1 = {
  firstName: "Hannan",
  lastName: "Sajid",
  age: 24,
  isLoggedIn: false,
};

console.log(person1);
console.log(person1.firstName);
console.log(person1.age);

// String
console.log("Some things about Strings");
// string(number) + number = string
// string(number) * number = number
// string(alpha) + number = string
// string(alpha) * number = NaN (not a number)
console.log("1" + 10);
console.log("1" * 10);
console.log("a" + 1);
console.log("a" * 1);

// Type of Operator
console.log(typeof ("1" + 10));
console.log(typeof ("1" * 10));
console.log(typeof ("a" + 1));
console.log(typeof ("a" * 1));
