
const readline = require('readline')

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})


rl.question('ecrire un montat : ', (Mad)=>{
    console.log(`budget en mad : ${Mad}`);
    let Eur = Mad/11;
    console.log(`budget en eur : ${Eur}`)
    rl.close();
    })
    

