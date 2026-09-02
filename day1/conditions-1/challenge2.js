let prompt = require('prompt-sync')();
let nombre = prompt('entrer nombre : ');

console.log("nombre : " + nombre);
if(nombre < 0)
    console.log("Le nombre est négatif.");
else if(nombre > 0 )
console.log("Le nombre est positive.")
else 
    console.log("Le nombre est égal à zéro.");