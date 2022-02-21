let arr = [105, 101, 106, 56];
let min = arr[0];
let max = arr[0];

for (let elem of arr) {
  if (elem > max) max = elem;
  if (elem < min) min = elem;
}
console.log(`max = ${max} min = ${min}`);