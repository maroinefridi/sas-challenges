// Challenge 03 — Produit

prompt = require(`prompt-sync`)()
let buy = prompt("entrer un produit nome  : ")


const Prodect = {
    name: "perly",
    price: 3,
    category: "danone",
    quantity: 10,
    available: "in stock"

}


if (Prodect.name == buy) {
    console.log(`produit disponible !! le prix et : `)
    console.log(Prodect.name)
    console.log(Prodect.price + " DH")
    console.log(Prodect.category)
    console.log(`stock total : ${Prodect.quantity * Prodect.price} DH`)
}
else {
    console.log("a La la ma b9ash khoud perly rah bhalo!!")
}
