const readlineSync = require("readline-sync");

const rand10 = () => {
  return  Math.floor(Math.random() * 10)-5;
}

const multiRand = (n) => {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = rand10();
  }
  return arr;
}

let n = readlineSync.question("n = ");
let arrS = multiRand(n);
console.log(arrS); let ind;
do {
  ind = false; /*array dejà sorti*/
  for (let i = 0; i < n-1; i++) {
    if (arrS[i] > arrS[i + 1]) {
      let buf = arrS[i];
      arrS[i] = arrS[i + 1];
      arrS[i + 1] = buf;
      ind = true;
    }
  }
}
while (ind === true);
console.log(`array after sort: ${arrS}`);
