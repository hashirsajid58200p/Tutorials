// function adder(num) {
//   function add(b) {
//     console.log(num + b);
//   }
//   return add;
// }

// const addTo5 = adder(5);
// addTo5(2);
// addTo5(10);

const myName = document.getElementById("myName");
const myButton = document.getElementById("clickMe");

function makeTextSizer(size) {
  function changeSize() {
    myName.style.fontSize = `${size}px`;
  }
  return changeSize;
}

const size12 = makeTextSizer(12);
const size24 = makeTextSizer(24);
const size36 = makeTextSizer(36);
const size48 = makeTextSizer(48);
const size60 = makeTextSizer(60);
const size72 = makeTextSizer(72);

myButton.addEventListener("click", size12);

function makeCount() {
  let count = 1;
  function increment() {
    console.log(count++);
  }
  return increment;
}

const counter1 = makeCount();
counter1();
counter1();
counter1();
counter1();
counter1();
counter1();
counter1();
counter1();
