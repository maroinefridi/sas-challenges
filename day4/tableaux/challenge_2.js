// Calculateur de Somme
function calculerSomme(tab){
    let sum = 0;
    for(i=0;i<tab.length;i++){
        sum += tab[i];
    }
    return sum;
}
console.log(calculerSomme([10,20,40]))