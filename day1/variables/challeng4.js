const prompt = require('prompt-sync')();
var kilometres = prompt('La distance parcourue en kilometres: ');
var litres = prompt('La quantité de carburant consommée en litres: ')
let Consommation = (litres / kilometres) * 100 ;
console.log("distance : " + kilometres + " km" );
console.log("Carburant : " + litres + " litres");
console.log("Consomation : " + Math.round(Consommation) + " L/100km");
