// Object Destructuring --------------------------
const pessoa = {
    nome: "Rato",
    idade: 39,
    altura: 1.70,
    cidade: "São Paulo"
}

// Notação de ponto ------------------------------
console.log(pessoa.nome)

// Notação de colchetes --------------------------
console.log(`${pessoa.nome} tem ${pessoa['idade']} anos.`)

// Destructuring - Desestrutura Objetos
const {nome, idade, altura, cidade} = pessoa
console.log(`${nome} nasceu em ${cidade}.`)
