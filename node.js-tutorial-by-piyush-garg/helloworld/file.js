// const { error } = require("console");
// const fs = require("fs");
const os = require("os");

console.log(os.cpus().length);

// //Sync
// // fs.writeFileSync("./test.txt", "Hey! There HS");
// // const result = fs.readFileSync("./contacts.txt", "utf-8");
// // console.log(result);

// //Async
// // fs.writeFile("./test.txt", "Hey! There HS", (error) => {});

// // const result = fs.readFile("./contacts.txt", "utf-8", (error) => {
// //   if (error) {
// //     console.log(error);
// //   } else {
// //     return result;
// //   }
// // });
// // console.log(result);

// fs.appendFileSync("./test.txt", `Hey There\n`);

const fs = require("fs");

// Blocking

// console.log("1");

// const result = fs.readFileSync("contacts.txt", "utf-8");
// console.log(result);

// Non-Blocking

// fs.readFile("contacts.txt", "utf-8", (error, result) => {
//   console.log(result);
// });

// console.log("2");

// Default Thread Pool Size is 4 more depends on the server processor threads if it has 16 then thread pool size can be increased to 16
