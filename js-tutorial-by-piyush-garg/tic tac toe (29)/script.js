let currentPlayer = "X";
let array = Array(9).fill(null);

function checkWinner() {
  if (
    (array[0] !== null && array[0] == array[1] && array[1] == array[2]) ||
    (array[3] !== null && array[3] == array[4] && array[4] == array[5]) ||
    (array[6] !== null && array[6] == array[7] && array[7] == array[8]) || // FIXED: array[7] changed to array[6]
    (array[0] !== null && array[0] == array[3] && array[3] == array[6]) ||
    (array[1] !== null && array[1] == array[4] && array[4] == array[7]) ||
    (array[2] !== null && array[2] == array[5] && array[5] == array[8]) ||
    (array[0] !== null && array[0] == array[4] && array[4] == array[8]) ||
    (array[2] !== null && array[2] == array[4] && array[4] == array[6])
  ) {
    document.write(`Winner is current ${currentPlayer}`);
    return;
  }
  if (!array.some((e) => e === null)) {
    document.write("Draw");
    return;
  }
}
// Removed the checkWinner() call here, as it's not needed until after a move.

function handleClick(element) {
  const id = Number(element.id);
  if (array[id] !== null) return;
  array[id] = currentPlayer;
  element.innerText = currentPlayer;
  checkWinner(); // ADDED: Call checkWinner AFTER the move is made
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  console.log(currentPlayer);
}
