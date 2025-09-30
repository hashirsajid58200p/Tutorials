// IIFE Immediately invoked function expressions

(function add(a, b) {
  console.log(a + b);
})(12, 17);

(function hello() {
  console.log("Hello!");
})();

(() => {
  console.log("I am Es6");
})();

const value = (() => 100)();
console.log(value);

const data = (async () => await fetch())();

const atm = function (initialBalance) {
  let balance = initialBalance;
  function withdraw(amt) {
    if (amt > balance) {
      return "Are you joking?";
    } else {
      balance -= amt;
      return balance;
    }
  }
  return { withdraw };
};

const Hashir = atm(1000);
console.log(Hashir.withdraw(100));
console.log(Hashir.withdraw(100));
console.log(Hashir.withdraw(1000));
