//Trouver une puissance
let prompt =  require('prompt-sync')();
let base = +prompt('base : ');
let exposant = +prompt('exposant : ');

let result = 0;

while(true){
   result = base ** exposant ;
console.log("result : " + result);
break;
}
