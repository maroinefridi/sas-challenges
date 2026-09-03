//Système de connexion
let Utilisateur = `admin`;
let Motpasse = 1234;
let count = 2;

console.log(`tu n'as que 3 essais!!`);
console.log(`Utilisateur : ` + Utilisateur);
let prompt = require(`prompt-sync`)();
let mopass;

while (count >= 0) {
    mopass = prompt(`Motpasse: `);
    if (Motpasse == mopass) {
        console.log(`Connexion réussie. \n Bienvenue !`);
        break;
    }
    while (Motpasse != mopass) {
        console.log(`Identifiants incorrects`);
        console.log(`Tentatives restantes : ` + count);
         if (count == 0) {
            console.log(`Compte temporairement bloqué.`);    
        }
        count--;
        
        break;
    }
}
