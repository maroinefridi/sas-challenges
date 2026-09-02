let prompt = require('prompt-sync')();
let noteCC = prompt('entrer note de Contrôle continu : ');

let projet = require('prompt-sync')();
let noteProjet = projet('entrer note de projet : ');

let exam = require('prompt-sync')();
let noteExamen = exam('entrer note de Examen final : ');

console.log("Contrôle continu : " + noteCC);
console.log("Projet : " + noteProjet);
console.log("Examen final : " + noteExamen);

let Notefinale = (noteCC * 2 + noteProjet * 3 + noteExamen * 5) / 10;
console.log("Note finale : " + Notefinale);