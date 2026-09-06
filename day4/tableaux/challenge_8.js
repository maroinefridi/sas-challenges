// Challenge 8 : Supprimer les Doublons Manuellement

function supprimerDoublons(tab) {
    let newarray = [];
    for (i = 0; i < tab.length; i++) {
        let repet = false
        for (j = 0; j < newarray.length; j++) {
            if (tab[i] === newarray[j]) {
                repet = true
                break;
            }
        }
        if (repet == false) {
            newarray.push(tab[i])
        }
    }
    return newarray;

}
console.log(supprimerDoublons([1, 2, 2, 3, 4, 4, 1, 2]))