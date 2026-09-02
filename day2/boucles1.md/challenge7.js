//Trouver le premier nombre supérieur
let N = 1;
while (true) {
    if (N * N > 100) {
        console.log("Résultat : " + N);
        console.log(N + " * " + N + " = " + N * N);
        break;
    }
    N++;
}