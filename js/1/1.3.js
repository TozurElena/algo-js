const readlineSync = require("readline-sync");

let firstName = readlineSync.question("What's your name? ");
console.log("Hello, " + firstName);