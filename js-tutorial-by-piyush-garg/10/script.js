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
