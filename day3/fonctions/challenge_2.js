//Calculateur d'Âge Canin
let prompt = require(`prompt-sync`)();
let ageHumain = prompt(`entrer age humain : `);
let Agechien = calculerAgeChien();

function calculerAgeChien(ageHuman){
    return ageHumain * 7 ;
}
console.log(`L'âge du chien équivalent est : ${Agehien} ans.`);
