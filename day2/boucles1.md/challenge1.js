//Compter les participants
let prompt = require('prompt-sync')();
let nombre = prompt('Nombre de participants : ');

for (let i = 1; i <= nombre; i++) {
    console.log("participant " + i);
}