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

const average = (arr) => {
  let s = 0;
  for (let elem of arr) {
    s += elem;
  }
  return s / arr.length;
}

const min = (arr) => {
  let minEl = arr[0];
  for (let elem of arr) {
    if (elem < minEl) minEl = elem;  
  }
  return minEl;
}

const max = (arr) => {
  let maxEl = arr[0];
  for (let elem of arr) {
    if (elem > maxEl) maxEl = elem;  
  }
  return maxEl;
}

let n = readlineSync.question("n = ");
let arr = multiRand(n);
console.log(arr);
console.log(`averge = ${average(arr)}`);
console.log(`min = ${min(arr)}`);
console.log(`max = ${max(arr)}`);



//  function rand10()
// function assignment - returns a random integer between 1 and 10
// parametres - no;
// function return 1 result of number integer
// function multiRand(n)
// function assignment - returns an array of n numbers of  a random integer between 1 and 10; numbers creer with function rand10()
// parametres - 1 parametr - number of elements in the array;
// function return 1 result - an array of n random numbers between 1 and 10
// function average(arr)
// function assignment - returns an average of array of n numbers (function multiRand creer an array) of  a random integer between 1 and 10; numbers creer with function rand10()
// parametres - 1 parametr - array of n numbers (function multiRand creer an array);
// function return 1 result - average of an array of n random numbers between 1 and 10
// function min(arr)
// function assignment - returns a min of elements  of array of n numbers (function multiRand creer an array) of  a random integer between 1 and 10; numbers creer with function rand10()
// parametres - 1 parametr - array of n numbers (function multiRand creer an array);
// function return 1 result - min of an array of n random numbers between 1 and 10
// function min(arr)
// function assignement - returns a max of elements  of array of n numbers (function multiRand creer an array) of  a random integer between 1 and 10; numbers creer with function rand10()
// parametres - 1 parametr - array of n numbers (function multiRand creer an array);
// function return 1 result - max of an array of n random numbers between 1 and 10