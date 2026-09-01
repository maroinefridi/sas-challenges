var prompt = require('prompt-sync')();
let score1 = Number(prompt('entrer Score partie 1 :'));

var prompt = require('prompt-sync')();
let score2 = Number(prompt('entrer Score partie 2 :'));

var prompt = require('prompt-sync')();
let score3 = Number(prompt('entrer Score partie 3 :'));

var prompt = require('prompt-sync')();
let score4 = Number(prompt('entrer Score partie 4 :'));

console.log("Partie 1 : " + score1);
console.log("Partie 2 : " + score2);
console.log("Partie 3 : " + score3);
console.log("Partie 4 : " + score4);

let Scoretotal = score1 + score2 + score3 + score4;

console.log("score total : " + Scoretotal );

let moyenne = Scoretotal / 4 ;

console.log("Moyenne : " + moyenne );