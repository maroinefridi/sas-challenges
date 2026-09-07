// Challenge 10 : Tri à Bulles (Bubble Sort)

function trierTableau(tab) {
   
    for (let i = 0; i < tab.length; i++) {
    

        for (let j = i+1; j < tab.length; j++) {
            if (tab[i] > tab[j]) {
            let swap = tab[i]
            tab[i]=tab[j]
            tab[j]=swap     

    return tab;
}
console.log(trierTableau([5, 3, 8, 1, 2]))