// Challenge 6 : Duplication de Chaîne (Simulation de repeat)

function repeterChaine(chaine, fois){
let newstr = "";

    for(let i=0;i<fois;i++){
    newstr+=chaine
    }
return newstr
}
console.log(repeterChaine("JS",3))