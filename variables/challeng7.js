var prompt = require('prompt-sync')();
let noteCC = Number(prompt('entrer note de Contrôle continu : '));

var prompt = require('prompt-sync')();
let noteProjet = Number(prompt('entrer note de projet : '));

var prompt = require('prompt-sync')();
let noteExamen = Number(prompt('entrer note de Examen final : '));

console.log("Contrôle continu : " + noteCC);
console.log("Projet : " + noteProjet);
console.log("Examen final : " + noteExamen);

let Notefinale = (noteCC * 2 + noteProjet * 3 + noteExamen * 5) / 10;
console.log("Note finale : " + Notefinale);


