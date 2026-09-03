//Jeu de combat
let joueur = 100;
let monster = 100;

console.log("[1] Attaque faible");
console.log("[2] Attaque forte");
console.log("[3] Soin");


let prompt = require('prompt-sync')();

while(joueur > 0 && monster > 0){
    let choix = prompt('Entrer un choix : ');
    switch(choix){
        case '1':
            if (monster - 15 >= 0) {
                monster -= 15;
            } else {
                monster = 0;
            }
            console.log(`Tu as infligé 15 PV dégâts au monstre`);
            console.log(`Monster a ${monster} PV`)
            break;
        case '2' :
            if (monster - 30 >= 0) {
                monster -= 30;
            } else {
                monster = 0;
            }
            console.log(`Tu as infligé 30 PV dégâts au monstre`);
            console.log(`Monster a ${monster} PV`)
            break;
        case '3' :
            joueur += 20;
            console.log(`Tu as récupéré 20 PV`)
            if(joueur -10 >= 0){
                joueur -=10;
            }
            else{
                joueur = 0;
            }
            console.log(`Le monstre t'a attaqué en infligeant 10 dégâts, tu as maintenant ${joueur}`)
            break;
    }
    
}
if(joueur === 0){
    console.log("Game Over ! \n Le monstre a gagné.");
}
else {
    console.log("Victoire ! \n Vous avez vaincu le monstre.");
}