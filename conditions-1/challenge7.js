console.log("1 → Lundi");
console.log("2 → mardi");
console.log("3 → mercredi");
console.log("4 → jeudi");
console.log("5 → vendredi");
console.log("6 → samedi");
console.log("7 → dimanche");

let prompt = require("prompt-sync")();
let choix = + prompt('entrer un choix : ');

switch(choix){
    case 1 : 
    console.log("lundi");
    break;

    case 2 : 
    console.log("mardi");
    break;

     case 3 : 
    console.log("mercredi");
    break;

     case 4 : 
    console.log("jeudi");
    break;

     case 5 : 
    console.log("vendredi");
    break;

     case 6 : 
    console.log("samedi");
    break;

     case 7 : 
    console.log("dimanche");
    break;
}