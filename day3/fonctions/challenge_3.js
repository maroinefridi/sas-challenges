//Générateur d'Email Professionnel
let prompt = require(`prompt-sync`)();
let nome = prompt(`entrer un nome : `);
let prenome = prompt(`entrer un prenom : `);

console.log(genererEmail(nome,prenome));

function genererEmail(n , p){
    return `${n}.${p}@entreprise.com`.toLowerCase();
}
