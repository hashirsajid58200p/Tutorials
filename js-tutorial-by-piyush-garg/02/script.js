// Variables

//var (global scope)

if (true) {
  var a = 10;
}
console.log(a);
// Datatypes varName = value; Strongly typed (c, c++)
// varName = value; Loosely typed (js)

var age = 20;
console.log(age);
age = "Twenty";
console.log(age);

// Naming Convention
// firstname
// first_name
// FirstName
// firstName Pref Camel Casing

var firstName = "Hashir";
console.log(name);

// let (local scope)

if (true) {
  let b = 50;
  console.log(b);
}
// console.log(b); let can't be accessed outside

// const (local scope)
// value can't be reassigned
// const declare hona k sth hi initialize krna zruri hota hai wrna error ata hai
const myAge = 22;

// myAge = 30;
console.log(myAge);

// var | let | const

// var global scope, re-assign krskta hain
// let local scope, re-assign krskta hain
// const local scope, re-assign nhi krskta aur declaration k time initialize krna prta hai baad ma nhi krskta
