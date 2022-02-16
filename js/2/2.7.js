const readlineSync = require('readline-sync');

let amount = readlineSync.question("Entee  amount -  ");
let s = 0;

for (let i = 1; i <= amount; i++) {
  let number = new Number(readlineSync.question(`Entee  number ${i} -  `));
  s +=number;
}
console.log(`Sum = ${s}`);

