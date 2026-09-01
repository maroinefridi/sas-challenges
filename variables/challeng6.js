

let prompt = require('prompt-sync')();
 score1 = +prompt('entrer Score partie 1 :');

prompt = require('prompt-sync')();
 score2 = +prompt('entrer Score partie 2 :');

prompt = require('prompt-sync')();
 score3 = +prompt('entrer Score partie 3 :');

prompt = require('prompt-sync')();
 score4 = +prompt('entrer Score partie 4 :');

console.log("Partie 1 : " + score1);
console.log("Partie 2 : " + score2);
console.log("Partie 3 : " + score3);
console.log("Partie 4 : " + score4);

let Scoretotal = 0 ;
Scoretotal += score1 + score2 + score3 + score4;

console.log("score total : " + Scoretotal );

let moyenne = Scoretotal / 4 ;

console.log("Moyenne : " + moyenne );