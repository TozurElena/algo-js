const readlineSync = require("readline-sync");

const rand10 = () => {
  return  Math.floor(Math.random() * 10)+1;
}

const multiRand = (n) => {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = rand10();
  }
  return arr;
}

let n = readlineSync.question("n = ");
console.log(multiRand(n));

//  function rand10()
// function assignment - returns a random integer between 1 and 10
// parametres - no;
// function return 1 result of number integer
// function multiRand(n)
// function assignment - returns an array of n numbers of  a random integer between 1 and 10; numbers creer with function rand10()
// parametres - 1 parametr - number of elements in the array;
// function return 1 result - an array of n random numbers between 1 and 10

