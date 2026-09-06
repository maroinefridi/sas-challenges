// Challenge 9 : Fusion de Deux Tableaux (Simulation de concat)
function fusionnerTab(tab1, tab2) {
    let newarray = [];
    newarray.push(tab1, tab2);
    return newarray.flat()
}
console.log(fusionnerTab([1, 2], [3, 4]))

console.log("----------------------------")

function fusionnerTableaux(tab1, tab2) {
    let newarray = []
    for (i = 0; i < tab1.length; i++) {
        newarray.push(tab1[i])
    }
    for (i = 0; i < tab1.length; i++) {
        newarray.push(tab2[i])
    }
    return newarray
}

console.log(fusionnerTableaux([1, 2], [3, 4]))
