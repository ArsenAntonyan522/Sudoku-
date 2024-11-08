const { log } = require('console');
const fs = require('fs');

function read() {
  return fs.readFileSync('./puzzles.txt', 'utf-8');
}

function solve(line) {
  const string = line.slice(0, 81);




function isSolved(board) {
}


console.table(solve(read()));

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



function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}

function prettyBoard(board) {
}


