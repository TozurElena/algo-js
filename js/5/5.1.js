const readlineSync = require("readline-sync");

let tvSerie = {};

const askTvSerie = () => {
  let nameS = readlineSync.question("name of the favorite TV serie = ");
  let yearS = readlineSync.question("production year of the favorite TV serie = ");
  let nameMembres = readlineSync.question("names of the cast members of the favorite TV serie(utilise , to separate words) = ");

  tvSerie.name = nameS;
  tvSerie.year = yearS;
  tvSerie.cast = nameMembres.split(', ');

  let jsonSerie = JSON.stringify(tvSerie, null, 4);

  return jsonSerie;
}

console.log(askTvSerie());