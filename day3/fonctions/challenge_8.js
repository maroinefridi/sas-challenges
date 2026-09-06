// Convertisseur Universel de Devises avec Callback

function convertirMontant(mantant,taux,formatMAD){
    return  formatMAD(mantant * taux)
}

function formatMAD(x){
    return  x + " DH"
}
console.log(convertirMontant(10,10,formatMAD))

