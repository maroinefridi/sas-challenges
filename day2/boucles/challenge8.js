//Accumulation de points
let prompt = require('prompt-sync')();
let Nombre = +prompt('Nombre de missions :  ');

let i = 1;

while(i <= Nombre){
    console.log(`mission ${i} → Score : ` + (i*100) )
    i++;
}

