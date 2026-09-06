// Challenge 1 : Compteur de Caractères
function compterCaracteres(chaine){
    let count = 0 ;
    let i = 0;
    while(chaine[i] !== undefined){
        i++;
        count++;
    }
return count;
}
console.log(compterCaracteres("code"))