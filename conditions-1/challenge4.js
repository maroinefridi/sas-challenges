let prompt = require('prompt-sync')();
let montant = + prompt('entre  le montant de  commande : ');

console.log("Montant de la commande : " + montant + " DH");

if(montant < 500){
    console.log("Livraison : 40 DH");
    let total = montant + 40;
    console.log("Total à payer : " + total + " DH")
}
else if(montant >= 500){
    console.log("Livraison : Gratuite");
    console.log("Total à payer : " + montant + " DH");
}