const fs = require('fs');

function read() {
  return fs.readFileSync('./puzzles.txt', 'utf-8');
}

const readTXT = read();

function solve(txt) {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */

  const arr = txt.split('').slice(0, 81);
  const arr1 = [];
  for (let i = 0; i < arr.length; i += 9) {
    const arrMini = arr.slice(i, i + 9);
    arr1.push(arrMini.map((el) => (isNaN(+el) ? 0 : +el)));
  }
  return arr1;
}
console.table(solve(readTXT));

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
