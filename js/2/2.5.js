const readlineSync = requiere('readline-sync');

let numberFavorite = readlineSync.question("Entee favorite number -  ");


while (numberFavorite != 42) {
  console.log('Are you sure?');
  numberFavorite = readlineSync.question("Entee favorite number -  ");
}

  
  


