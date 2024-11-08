const fs = require('fs');

function read() {
  const data = fs.readFileSync('./puzzles.txt', 'utf-8');
  return data;
}

const readFile = read();

function solve(read) {
  const string = read.slice(0, 81);
  const boardLines = [];

  for (let i = 0; i < 9; i++) {
    const line = string.slice(i * 9, (i + 1) * 9).split('');
    boardLines.push(line);
  }
  return boardLines;
}

console.table(solve(readFile));

function isSolved(board) {
}

function prettyBoard(board) {
}

