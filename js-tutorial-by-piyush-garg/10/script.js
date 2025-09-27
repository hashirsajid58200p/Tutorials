// Arrays
const students = ["Hashir", "Moaz", "Aqib"];
students[0] = "Ali";
console.log(students);

students.push("Hashir", "Nouman ");
console.log(students);

// In js you have hetrogenous arrays instead of homogenous homogenous means you can't store any other datatype value hetrogenous means you can store any kind of array

myArray = [1, "Hashir", true, null];
myArray.push({ lastName: "Sajid", age: 22 });
console.log(myArray.indexOf(false));

myArray.pop();
console.log(myArray);

myArray.reverse();
console.log(myArray);

const studentsNames = ["Hashir", "Ali", "Hasnat", "Faris"];

console.log("For Each");
studentsNames.forEach((val) => console.log(val + " " + "Sajid"));
console.log("Map");
studentsNames.map((val) => console.log(val + " " + "Sajid"));

const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
newArrayNumbers = [];
Numbers.forEach((num) => newArrayNumbers.push(num * 2));

console.log(newArrayNumbers);

const NumbersMap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function double(n) {
  return n * 2;
}
let newArrayNumbersMap = NumbersMap.map(double);

console.log(newArrayNumbersMap);

const NumbersFind = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let answer = NumbersFind.find((num) => num === 9);
console.log(answer);

let answerIndex = NumbersFind.findIndex((num) => num === 4);
console.log(answerIndex);

console.log(NumbersFind.includes(3));

const evenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArrayEven = evenNumbers.filter((num) => num % 2 == 0);

console.log(newArrayEven);

let newArraySlice = evenNumbers.slice(1, 5);
console.log(newArraySlice);

let newArraySplice = evenNumbers.splice(1, 4);
console.log(newArraySplice);
