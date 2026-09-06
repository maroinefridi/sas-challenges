//  Recherche d'Élément (Simulation de includes)
function contientElement(tab, valeur) {
    for (let i = 0; i < tab.length; i++) {

        if (tab[i] === valeur) {
            return true;
        }
    }
    return false;
}
require("./challenge_4")
console.log(contientElement(["pomme", "banane"], "banane"))