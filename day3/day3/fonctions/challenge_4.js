//Salutation Personnalisée avec Valeur par Défaut
let prompt= require(`prompt-sync`)();
let nom = prompt(`entrer un nome : ` );
let titre = prompt(`entrer un titre : `);

console.log(saluerClient(titre,nom));

function saluerClient(titre,nome){
    return `"Bonjour ${titre} ${nome}"`
}