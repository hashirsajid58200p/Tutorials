function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function square(value) {
  return value * value;
}

function composeTwoFunctions(fn1, fn2) {
  return function (a, b) {
    return fn2(fn1(a, b));
  };
}

const c2f = (fn1, fn2) => (a, b) => fn2(fn1(a, b));

const task = c2f(multiply, square);
console.log(task(2, 3));
