// Challenge 3 : Inverseur de Chaîne

function inverserChaine(chaine){
    let newchaine = "" ;
    for(let i = chaine.length-1; i >= 0;i--){
     newchaine +=  chaine[i]
    }
return newchaine
}
console.log(inverserChaine("hello"))