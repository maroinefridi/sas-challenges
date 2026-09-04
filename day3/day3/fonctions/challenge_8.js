function convertirMontant(montant, taux, formatter) {
    let resultat = montant * taux;
    return formatter(resultat);
}

function formatMAD(val) {
    return val + " DH";
}

console.log(convertirMontant(10, 10, formatMAD));
