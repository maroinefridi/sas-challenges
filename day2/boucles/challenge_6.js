//Partie 2 — Boucle while
//Compte à rebours
let prompt = require('prompt-sync')();
let N = +prompt('Départ : ');

while (N >= 0) {
    console.log(N);
    N--;
}
console.log("Décollage !");