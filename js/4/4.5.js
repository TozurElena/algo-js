const readlineSync = require("readline-sync");

const calcDistance = (x1,y1,x2,y2) => {
  return Math.sqrt(Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2));
}

let x1 = readlineSync.question("points A, x = ");
let y1 = readlineSync.question("points A, y = ");
let x2 = readlineSync.question("points B, x = ");
let y2 = readlineSync.question("points B, y = ");

console.log(`Point A =[${x1},${y1}], point B = [${x2},${y2}]=> ${calcDistance(x1,y1,x2,y2)}`);

//  function calcDistance
// function assignment - takes the coordinates of two different points A and B in a 2D space et calculate the distance between those two points.
// parametres - 4: the coordinates of two different points A and B in a 2D space;
// function return  result - the distance between those two points.