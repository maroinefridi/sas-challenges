//Compter les multiples
let prompt = require("prompt-sync")();
let N = +prompt('N = ');
let X = +prompt('X = ');

let total = 0;
let count = X;

for (let i = 1; count <= N; count = count + X) {
    total = total + count;
    console.log(count);
}
console.log("total : " + total);