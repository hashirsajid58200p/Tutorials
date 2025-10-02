const { error } = require("console");
const fs = require("fs");

//Sync
// fs.writeFileSync("./test.txt", "Hey! There HS");
// const result = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result);

//Async
// fs.writeFile("./test.txt", "Hey! There HS", (error) => {});

// const result = fs.readFile("./contacts.txt", "utf-8", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     return result;
//   }
// });
// console.log(result);

fs.appendFileSync("./test.txt", `Hey There\n`);
