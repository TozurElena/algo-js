var readlineSync = require('readline-sync');

let sizeShoe = readlineSync.question("What's your shoe size? ");
let yearBirth = readlineSync.question("What's your birth year? ");

let result = (sizeShoe * 5 + 5 ) * 50 - yearBirth + 1766;

console.log(result);