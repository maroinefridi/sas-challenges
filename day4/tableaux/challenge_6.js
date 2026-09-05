function inverserTableau(tab){
    let newtab = "";
    for(let i=tab.length-1;i>=0 ;i--){
        newtab += tab[i];
    }
    return newtab;
}
console.log(inverserTableau([10, 20, 30, 40]));
