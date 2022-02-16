var readlineSync = require('readline-sync');

let firstNumber = readlineSync.question("What's your first number ineger? ");
let secondNumber = readlineSync.question("What's your second number integer? ");

console.log("rester= " + firstNumber % secondNumber );