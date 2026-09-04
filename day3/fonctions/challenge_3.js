//Générateur d'Email Professionnel
let prompt = require(`prompt-sync`)();
let nome = prompt(`entrer un nome : `);
let prenome = prompt(`entrer un prenom : `);

<<<<<<< HEAD
console.log(genererEmail(nome,prenome));

function genererEmail(n , p){
=======
console.log(GenererEmail(nome,prenome));

function GenererEmail(n , p){
>>>>>>> e6eaed92bd2212b64fc1326f932e95f7ca7420dc
    return `${n}.${p}@entreprise.com`.toLowerCase();
}
