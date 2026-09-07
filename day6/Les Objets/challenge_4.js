// Challenge 04 — Calculateur de salaire

const employee = {
    firstName: "Sara",
    lastName: "Amrani",
    salary: 7000,
    bonus: 1000,
    absenceDays: 2
}
let penaltes = 200 * employee.absenceDays;
let salaireFinale = employee.salary + employee.bonus - penaltes

console.log(`Le salaire de base ${employee.salary} DH`)
console.log(`bonus : ${employee.bonus} DH`)
console.log(`Les pénalités : ${penaltes} DH`)
console.log(`Le salaire final : ${salaireFinale}`)