// function add(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

const add = (a) => (b) => (c) => a + b + c;
console.log(add(2)(3)(5));

// function sendAutoEmail(to) {
//   return function (subject) {
//     return function (body) {
//       console.log(`Sending Email ${to} with subject ${subject}: ${body}`);
//     };
//   };
// }

const sendAutoEmail = (to) => (subject) => (body) =>
  console.log(`Sending Email ${to} with subject ${subject}: ${body}`);

let step1 = sendAutoEmail("hashirsajid58200p@gmail.com");
let step2 = step1("New order confirmation");

console.log(step2("Hey, Hashir there is somthing for you"));
