let prompt = require('prompt-sync')()
 let age = prompt('entrer age : ');

 console.log("age : " + age + "ans" );

 if(age >= 18)
    console.log("Accès autorisé");
else
    console.log("Accès refusé");
