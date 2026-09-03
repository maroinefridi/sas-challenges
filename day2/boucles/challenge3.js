//Somme des nombres
let prompt = require('prompt-sync')();
let N = + prompt('N : ');

let somme = 0;

for (let i = 1; i <= N; i++) {
    somme = somme + i;
}
console.log("somme : " + somme);