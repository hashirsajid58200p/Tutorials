//Loops for || do while || while
// for loop is used when you know the number of iterations
// while loops is used when you know the condition but don't know number of iterations
// do while first runs the code then checks the condition

// for
for (let i = 1; i <= 4; i = i + 1) {
  console.log("Hashir " + " " + i);
}

// while
let ip = 0;
let house = 10;

while (ip != house) {
  ip = ip + 1;
  console.log("Step Taken" + " " + ip);
}

// do while
do {
  ip = ip + 1;
  console.log("Step Taken" + " " + ip);
} while (ip <= house);

// Guess the input
let numberGuess = 40;
let guess = 0;
do {
  guess = parseInt(prompt("Guess a number"));
  if (guess == numberGuess) {
    alert("Winner");
    break;
  }
} while (guess != 0);
