const readlineSync = requiere("readline-sync");

let firstName = readlineSync.question("What's your first name? ");
let name = readlineSync.question("What's your second name? ");
let city = readlineSync.question("What's your city? ");
console.log("Your name is "+firstName+" "+ name +" and you live in " + city);