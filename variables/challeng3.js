
const readline = require ('readline')

const rl = readline.createInterface
({
    input : process.stdin,
    output : process.stdout
})

rl.question('entrer capacité exprimée en Gigaoctets ', (GB)=>{
    console.log(`stockage : ${GB}` + " GB")
    let MB = GB * 1024
    console.log(`stockage : ${MB}`+ " MB")
    rl.close()
})