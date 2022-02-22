const readlineSync = require("readline-sync");

let number = readlineSync.question("positive integer = ");

const divisors = (number) => {
  if (number < 2) return console.log(`${number} => nothing (it's a prime number)`);
  let divider = 2; let index = true;
  while (divider < number) {
    if (number % divider == 0) {console.log(`${divider} `);  index = false;}
    divider++;
  }
  if (index) console.log(`${number} => nothing (it's a prime number)`);
}

divisors(number);