let prompt = require("prompt-sync")();
let note = prompt('entrer note : ');

console.log("Note : " + note);

if(note < 10)
    console.log("Montion : Echec");

else if(note >= 10 && note < 11.99)
     console.log("Montion : Passable");

    else if(note >= 12 && note < 13.99)
        console.log("Montion : Assez bien");

    else if(note >= 14 && note < 15.99)
     console.log("Montion : Bien");

    else if(note >= 16 && note < 17.99)
     console.log("Montion : Très bien");

    else if(note >= 16 && note <= 20)
     console.log("Montion :	Excellent");