// Challenge 06 — Liste des étudiants

const students = [
    {
        firstName: "Ali",
        age: 20,
        city: "Youssoufia"
    },
    {
        firstName: "Sara",
        age: 22,
        city: "Marrakech"
    },
    {
        firstName: "Omar",
        age: 19,
        city: "Safi"
    }
]
console.log(students)

for (let student of students) {
    console.log(student.firstName);
    console.log(student.age);
}

