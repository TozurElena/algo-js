let arr = [100, 101, 102];
let arrCopy = [];
// first version
for (let elem of arr) {
  arrCopy.push(elem);
}
console.log(arrCopy);
// second version
arrCopy = Object.assign(arr);
console.log(arrCopy);
