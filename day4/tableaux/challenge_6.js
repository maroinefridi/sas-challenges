
// Challenge 6 : Inversion Manuelle (Simulation de reverse)

function inverserTableau(tab) {
    let newtab = [];
    for (let i = tab.length - 1; i >= 0; i--) {
        ajouterALaFin(newtab, tab[i]);
    }


    return newtab;
}
function ajouterALaFin(tab, element) {
    tab[tab.length] = element
    return tab;
}

console.log(inverserTableau([10, 20, 30, 40]));
