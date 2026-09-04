//Le Somateur Universel (Rest Parameter)
let prompt = require(`prompt-sync`)();

let total = 0;
let takenumbers = [];
for (let i = 0; i < 4; i++) {
    let usernumbers = +prompt(`entrer nombers : `);
    takenumbers.push(usernumbers);
}

console.log("nombers : " + takenumbers);

console.log(additionnerTout(takenumbers))

function additionnerTout(takenbr) {
    for (let i = 0; i < 5; i++) {
        total = takenbr.reduce((accumulator, currentValue) => accumulator + currentValue)
        return total;
    }
}