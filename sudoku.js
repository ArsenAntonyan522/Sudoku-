const fs = require('fs');
function read() {
  return fs.readFileSync('./puzzles.txt', 'utf-8');
}

const readFile = read();

function solve(read) {
  const string = read.slice(0, 81);

  const firstString = string.slice(0, 9).split('');
  const secondString = string.slice(9, 18).split('');
  const thirdString = string.slice(18, 27).split('');
  const fourthString = string.slice(27, 36).split('');
  const fifthString = string.slice(36, 45).split('');
  const sixString = string.slice(45, 54).split('');
  const sevenString = string.slice(54, 63).split('');
  const eightString = string.slice(63, 72).split('');
  const nineString = string.slice(72, 81).split('');

  const boardLines = [
    firstString,
    secondString,
    thirdString,
    fourthString,
    fifthString,
    sixString,
    sevenString,
    eightString,
    nineString,
  ];
  return boardLines;
}
console.table(solve(readFile));

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
