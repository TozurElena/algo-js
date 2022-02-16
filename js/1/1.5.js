var readlineSync = require('readline-sync');

let firstNumber = readlineSync.question("What's your first number decimal? ");
let secondNumber = readlineSync.question("What's your second number decimal? ");

console.log(Math.trunc(firstNumber));
console.log(Math.trunc(firstNumber)*secondNumber);