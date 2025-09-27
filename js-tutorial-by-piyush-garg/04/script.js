// Conditional Statements
console.log("Conditional Statements");
const age = 78;

// ladder if else

if (age >= 80) {
  console.log("not eligible for voting");
} else if (age >= 18) {
  console.log("eligible for voting");
} else {
  console.log("not eligible for voting");
}

// Ternary Operator for only two conditions
let result =
  age >= 80
    ? console.log("Yes, you are bigger than 80")
    : console.log("No, you are not bigger than 80");

// Switch Statements
console.log("Switch Statements");
const option = 4;

switch (option) {
  case 1:
    {
      console.log("salam");
    }
    break;
  case 2:
    {
      console.log("hello");
    }
    break;
  case 3:
    {
      console.log("namasta");
    }
    break;
  case 4:
    {
      console.log("bonjour");
    }
    break;
  default:
    console.log("invalid option");
}

let a = 30;
let opt = "-";
let b = 80;
switch (opt) {
  case "+":
    {
      console.log(a + b);
    }
    break;
  case "-":
    {
      console.log(a - b);
    }
    break;
  case "*":
    {
      console.log(a * b);
    }
    break;
  case "/":
    {
      console.log(a / b);
    }
    break;
  default:
    console.log("invalid, please select a valid option");
}
