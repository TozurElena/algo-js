// const readlineSync = requiere("readline-sync");

// let min = readlineSync.question("Entee min -  ");
// let max = readlineSync.question("Entree max -  ");
// let current = readlineSync.question("Entree current -  ");

let min = 0;
let max = 10;
let current = 15;

if (min > max) console.log('Erreur! min >max')
  else if (current > min && current < max) console.log(`Votre number ${current} entre ${min} et ${max}`);


