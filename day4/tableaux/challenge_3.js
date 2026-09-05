// Recherche du Maximum
function trouverMax(tab){
    let max = tab[0];
    for(let i=0;i<tab.lenght;i++){
       if(tab[i] > max ) {
        max = tab[i];
       }
    }
    return max ;
}
console.log(trouverMax([10,13,5]))