//Horloge / Horodatage Système

console.log(obtenirHeureActuelle());

function obtenirHeureActuelle(){
let date = new Date();
let heure = String(date.getHours()).padStart(2,`0`);
let munites = String(date.getMinutes()).padStart(2,`0`);
let seconde = String(date.getSeconds()).padStart(2,`0`);

return heure + ":" + munites + ":" + seconde;
}