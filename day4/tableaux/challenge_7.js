// Challenge 7 : Filtrage Manuel des Nombres Pairs

function filtrerPairs(tab) {
    let newarray = [];
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] % 2 == 0) {
            newarray.push(tab[i])
        }

    }
    return newarray;
}
console.log(filtrerPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))