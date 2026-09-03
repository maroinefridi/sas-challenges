//Table de multiplication
let prompt = require('prompt-sync')();
let N = +prompt('Nombre : ');

for(let i = 1;i <= 10;i++){
 console.log(N + " * " + i + " = " + N * i );
}