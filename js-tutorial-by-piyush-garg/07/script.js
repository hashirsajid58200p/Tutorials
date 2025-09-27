// function a block of code that performs a particular task

function sayHello() {
  console.log("Hello Hashir");
}

sayHello();

function add(num1, num2, num3) {
  console.log(num1 + num2 + num3);
}

add(10, 20, 30);

function multiply(num1, num2, num3) {
  console.log(num1 * num2 * num3);
}

multiply(5, 10, 10);

// Don't use console log in functions use return console log is a bad practice

function subtract(num1, num2, num3) {
  return num1 - num2 - num3;
}

console.log(subtract(100, 5, 90));

let ans = subtract(100, 10, 90);
console.log("answer is:", ans);

// Umlimited arguments and Sum of infinite numbers of arrguments
function addNumbers() {
  answer = 0;
  for (i = 0; i < arguments.length; i = i + 1) {
    answer = answer + arguments[i];
  }
  return answer;
}

let result = addNumbers(10, 20, 30, 40, 50);
console.log(result);

// Doing sum of infinite arrguments using spread operator

function addNumbersV2(...numbers) {
  let answer = 0;
  for (i = 0; i < numbers.length; i = i + 1) {
    answer = answer + numbers[i];
  }
  return answer;
}
let resultV2 = addNumbersV2(10, 20, 30, 40, 50, 60, 70);
console.log(resultV2);
