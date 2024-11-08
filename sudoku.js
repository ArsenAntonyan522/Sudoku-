const fs = require('fs');

function read() {
  const puzzles = fs.readFileSync('./puzzles.txt', 'utf-8');
  const sudokuPack = puzzles.split('\r\n');
  const sudoku = sudokuPack[process.argv[2]];
  return sudoku
}

const example = read()

function solve(example) {
const arr = example.split('');
  const board = [];
  for (let i = 0; i < arr.length; i += 9) {
    const arrMini = arr.slice(i, i + 9);
    board.push(arrMini.map((el) => (isNaN(+el) ? 0 : +el)));
  }
  return board;
}

console.table(solve(example))
function isSolved() {
}

function prettyBoard() {
 
}
