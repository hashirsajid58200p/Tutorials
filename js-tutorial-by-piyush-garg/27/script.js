function makeIterator(start = 0, end = Infinity, step = 1) {
  let nextStart = start;
  let iterationCount = 0;

  return {
    next() {
      let result;
      if (iterationCount < end) {
        result = { value: nextStart, done: false };
        nextStart = nextStart + step;
        iterationCount++;
        return result;
      }
      result = { value: iterationCount, done: true };
    },
  };
}

// const myIterator = makeIterator(1, 20);

// let result = myIterator.next();

// while (!result.done) {
//   console.log(result.value);
//   result = myIterator.next();
// }

function* makeMyIteratorNew(start, end, stepSize) {
  for (let i = start; i <= end; i += stepSize) {
    yield i;
  }
}

const getButton = document.getElementById("get-next");
let one = makeMyIteratorNew(1, 20, 1);

getButton.addEventListener("click", () => {
  getButton.innerText = one.next().value;
});
