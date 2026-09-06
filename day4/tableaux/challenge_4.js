// Challenge 4 : Ajout à la Fin (Simulation de push)

function ajouterALaFin(tab, element) {
    tab[tab.length] = element
    return tab;
}

console.log(ajouterALaFin([1, 2, 3], 4))