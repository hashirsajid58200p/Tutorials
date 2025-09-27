// Arrow Functions

// 1. Syntax
const sayHello = () => {
  console.log("hello");
};

sayHello();

// const add = (a, b, c) => {
//   return a + b + c;
// };

const add = (a, b, c) => a + b + c; // One Liner use only when you have just single statement

console.log(add(5, 10, 15));

// 2. 'arguments' Keyword is not avaliable in arrow functions

// You can't use arguments in arrow function but use can use spread operator
// function addNumbers() {
//   console.log(arguments);
// }
// addNumbers(10, 20, 30, 50);

function addNumbers(...numbers) {
  console.log(numbers);
}
addNumbers(10, 20, 30, 50);

// 3. Hoisting is not avaliable in arrow functions so you can't hoist in arrpw function
// hoisting means you can declare you function later but you can use it earlier

// sayMeHello();

// function sayMeHello() {
//   console.log("Hello");
// }

// sayMeHello();

// let sayMeHello = () => {
//   console.log("Hello");
// };

// 4. 'this' Keyword

// const obj = {
//   value: 20,
//   myFunction() {
//     console.log("value is: " + this.value);
//   },
// };

// obj.myFunction();

const obj = {
  value: 20,
  myFunction: () => {
    console.log("value is: " + this);
  },
};

obj.myFunction();
