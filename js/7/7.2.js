const readlineSync = require("readline-sync");

let number = readlineSync.question("number = ");

const fib = (number) => {
  let a = 1; let b = 1;
  console.log(`1 \n1`);
  for (let i = 3; i <= number; i++) {
    let c = a + b;
    a = b;
    b = c;
    console.log(`${b} `);
  }
  
}

fib(number);

// Make a program that asks for an integer n and generates the n first Fibonacci numbers.