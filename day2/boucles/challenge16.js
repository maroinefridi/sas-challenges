//Deviner un nombre
let Nombresecret = 19;
let prompt = require(`Prompt-sync`)();;
let Tentative;
do{
     Tentative = prompt(`Tentative : `);
    Tentative > Nombresecret ? console.log(`Trop grand entrer un autre nomber : `):null;
    Tentative < Nombresecret ? console.log(`Trop petit entrer un autre nomber : `):null;
    Tentative == Nombresecret ? console.log(`Bravo!`):null;
}
while(Tentative != Nombresecret){
}