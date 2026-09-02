let prompt = require('prompt-sync')();
let a = +prompt('entrer premier nombre : ');
let operateur = prompt('entrer un operateur : ');
let b = +prompt('entrer dexieme nomber : ');

console.log("Premier nombre : " + a);
console.log("operateur : " + operateur);
console.log("deuxiem nomber : " + b);

if (b == 0){
    console.log("zero");
    process.exit();
}


switch (operateur) {
    case '+':
        console.log(a + b);
        break;

    case '-':
        console.log(a - b);
        break;

    case '*':
        console.log(a * b);
        break;

    case '/':
        
        console.log(a / b);
        break;

    default:
        console.log("Opérateur invalide.");
}