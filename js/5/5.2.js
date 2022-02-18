const readlineSync = require("readline-sync");

let tvSerie = {};

const askTvSerie = () => {
  let nameS = readlineSync.question("name of the favorite TV serie = ");
  let yearS = readlineSync.question("production year of the favorite TV serie = ");
  let nameMembres = readlineSync.question("names of the cast members of the favorite TV serie(utilise , to separate words) = ");

  tvSerie.name = nameS;
  tvSerie.year = yearS;
  tvSerie.cast = nameMembres.split(', ');

  return tvSerie;
}

const randomizeCast = (tvSerie) => {
  let listCastArr = tvSerie.cast;
  delete tvSerie.cast;
  listCastArr.sort(() => Math.random() - 0.5);
  let newCast = listCastArr;
    
  return newCast;
}

console.log(randomizeCast(askTvSerie()));

// Create a function named randomizeCast(tvSerie) that will take as argument the data structure you defined in the previous exercise 
// and return a list of the same cast but in a random order.
// Create a program that will use randomizeCast(tvSerie) and askTvSerie() to ask the user about a TV serie then display a randomized list of the previous cast 
// that will form the new cast of your next serie.