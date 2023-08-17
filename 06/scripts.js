const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

let x = 0;
function encontrarPet (usuarios, pet){
 for (let i of usuarios){
    for(let j of i.pets){
    if (j === pet){
        console.log(`O dono(a) do(a) ${pet} é o(a) ${i.nome}`)
    }
 }
 x++;
 }
 if(x === usuarios.length){
    console.log(`Que pena ${pet}, não encontramos seu dono(a)`)
 }
}

encontrarPet(usuarios, "Pingo")