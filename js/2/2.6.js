const readlineSync = require('readline-sync');

let day = readlineSync.question("Entee  number  between 1 and 7 -  ");


switch( day) {
  case '1': console.log('Lundi');
    break;
  case '2': console.log('Mardi');
    break;
  case '3': console.log('Mercredi');
    break;
  case '4': console.log('Jeudi');
    break;
  case '5': console.log('Vendredi');
    break;
  case '6': console.log('Samedi');
    break;
  case '7': console.log('Dimanche')
    break;
  default: console.log('Erreur, 1-7');
    break;
}
