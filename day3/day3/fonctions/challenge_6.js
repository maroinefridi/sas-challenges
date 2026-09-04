// Validateur de Mot de Passe
let prompt = require(`prompt-sync`)()
let motdepass = prompt(`entrer mot de pass : `);

console.log(verifierMotDePasse(motdepass))

function verifierMotDePasse(mdp){
    let len = mdp.length;
    if(len >= 8 && mdp.includes("@") )
        return true;
    else
        return false;
}