// Challenge 05 — Gestion d'un compte bancaire

const account = {
    owner: "Tayeb",
    balance: 5000,
    type: "saving"
}
function deposerArgent(deposer){
    account.balance +=deposer;
    return account.balance ;
}

function gestionCompte(retrait) {
    if (retrait > account.balance || retrait < 0) {

        return "Le retrait a été refusé .";
    }
        account.balance-=retrait 
        return account.balance; 
    
}
console.log(`le solde : ${account.balance} DH`)
let newaccbalance = deposerArgent(2000)
console.log(` votre balance actuall est : ${newaccbalance} DH`)

console.log(gestionCompte(4500))
console.table(account)