// High order function and call backs (function that takes a fuction as an arguments)

function add(a, b, cb) {
  let result = a + b;
  cb(result);
}

// function showResult(result) {
//   console.log(result);
// }

add(10, 20, (val) => console.log(val));
add(500, 100, (result) => console.log(result));

function add(a, b, cb) {
  let result = a + b;
  cb(result);
  return () => console.log(result);
}

let resultFunction = add(10, 20, () => {});
resultFunction; 
