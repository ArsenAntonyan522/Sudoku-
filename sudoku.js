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



function isSolved(numberRand) {
  const existedNumbers = [];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      existedNumbers.push(numberRand[j][i]);
      if (numberRand[j][i] === '-' || existedNumbers.includes(numberRand[j][i])) {
        return false;
      }
    }
  }

  const existedNumbers1 = [];

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      existedNumbers1.push(numberRand[i][j]);
      if (numberRand[i][j] === '-' || existedNumbers.includes(numberRand[i][j])) {
        console.log(numberRand[i][j]);

        return false;
      }
    }
  }

  console.log(existedNumbers1);
  return true;
}

isSolved(solve(read()));



