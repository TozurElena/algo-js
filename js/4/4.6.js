const readlineSync = require("readline-sync");

const  factorial = (a) => {
  if (a == 1) return a;
  return a * factorial (a - 1);
}

let a = readlineSync.question("number = ");
console.log(`factorial = ${factorial(a)}`);

//  function factorial
// function assignment - returns the factorial of a number. This function  recursive.
// parametres - 1: number;
// function return  result - the factorial of a number.