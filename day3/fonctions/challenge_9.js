// Générateur de Compteur Indépendant (Closure)
const moncompteur = creerCompteur(10)
function creerCompteur(x){
    let valeurinitial = x
   
    return function(){
        valeurinitial++;
        return valeurinitial;
    }
}

console.log(moncompteur())
console.log(moncompteur())
console.log(moncompteur())
