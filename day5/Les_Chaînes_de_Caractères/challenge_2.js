// Challenge 2 : Compteur d'Occurrences d'un Caractère
function compterLettre(chaine, lettre){
    let count = 0;
    let i=0
    while(chaine[i]){
        if(chaine[i] == lettre){
            count++
        }
         i++;
    }
    return count;
}
console.log(compterLettre("javascript","a"))