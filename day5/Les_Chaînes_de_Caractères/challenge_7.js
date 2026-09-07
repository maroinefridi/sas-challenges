// Challenge 7 : Remplacement Manuel d'un Caractère

function remplacerCaractere(chaine, ancien, nouveau) {
    let stock = "";


    for (let i = 0; i < chaine.length; i++) {
       if (chaine[i] === ancien) {
            stock += nouveau;
        } else {
            stock += chaine[i];
        }

    }

    return stock;
}


console.log(remplacerCaractere("banana", "a", "o")) 