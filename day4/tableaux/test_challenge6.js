function inverserTableau(tab){

    while(tab.length >= 0){
        let i = 0;
        let take =tab[i];
        tab[i]=[tab.length-1-i];
        i++;
    }
    return take;
}
console.log(inverserTableau([10, 20, 30, 40]));