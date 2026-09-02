var prompt = require('prompt-sync')();
let Duree = prompt('la durée du film en minutes : ');
console.log("Durée : " + Duree + " minutes");
if(Duree < 60)
    console.log("Catégorie : Film métrage");
else if(Duree >= 60 && Duree <= 120)
    console.log("Catégorie : Film standard");
else
     console.log("Catégorie : Film long");