const readlineSync = require("readline-sync");

const random = () => {
    return Math.floor(Math.random() * 100)+1;
}

console.log('Guess the number  an integer between 1 and 100');
let numberIdeal = random(); let numberUser;
// console.log(numberIdeal);
do {
  numberUser = readlineSync.question("number = ");
  if (numberUser == numberIdeal) console.log('Well guessed!');
    else if (numberUser > numberIdeal) console.log('Too high');
      else console.log('Too low');
}
while (numberIdeal != numberUser);


