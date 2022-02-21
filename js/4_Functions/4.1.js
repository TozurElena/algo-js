const readlineSync = require("readline-sync");

const  calcSurface = (lengthRect, widthRect) => {
  return lengthRect*widthRect;
}

let lengthRect = readlineSync.question("What's length of a rectangle? ");
let widthRect = readlineSync.question("What's width of a rectangle? ");

console.log(`surface = ${calcSurface(lengthRect, widthRect)}`);

// function calcSurface
// function assignment - calcul surfase of the rectangle
// parametres - 2 valuers of Number;
// function return 1 result of number