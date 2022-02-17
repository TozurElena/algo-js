const readlineSync = require("readline-sync");



let firstName = readlineSync.question("What's your first name? ");
console.log('rester 4 question');
let name = readlineSync.question("What's your second name? ");
console.log('rester 3 question');
let city = readlineSync.question("What's your city? ");
console.log('rester 2 question');
let color = readlineSync.question("What's your color favorite? ");
console.log('rester 1 question');
let animal = readlineSync.question("What's your animal favorite? ");
console.log(`${firstName} ${name}, tu habite à ${city} avec ${animal} ${color}`);



//pas terminer!!!!