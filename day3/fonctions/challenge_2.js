//Calculateur d'Âge Canin
let prompt = require(`prompt-sync`)();
let ageHumain = prompt(`entrer age humain : `);
let Agechien = CalculerAgeChien();

function CalculerAgeChien(ageHuman){
    return ageHumain * 7 ;
}
console.log(`L'âge du chien équivalent est : ${Agehien} ans.`);
