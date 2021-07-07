// array-- -------------------------------------------------
const alunasGama = ["Paula", "Maria", "Estrela", "Clara"]
console.log(alunasGama[1])

// Operador spread ----------------------------------------
const alunasXP = [...alunasGama, "Simara"]
console.log(alunasXP)

// Map ----------------------------------------------------
alunasXP.map(aluna => console.log(aluna))

// Filter - Números pares ---------------------------------
const numeros = [34, 45, 67, 90, 55, 76]
const numImpar = numeros.filter(numero => numero % 2 !== 0)
console.log(numImpar)

// Find ----------------------------------------------------
const produtos = ["geladeira", "fogão", "cama", "mesa"]
const resultado = produtos.find(produto => produto === "mesa")
console.log(resultado)

// Sort ------------------------------------------------------
const numerosTab = [34, 45, 67, 90, 55, 76]
const numOrdCres = numerosTab.sort()
console.log(numOrdCres)

const numOrdDecres = numerosTab.sort((a,b) => b-a)
console.log(numOrdDecres)

// Reduce - Reduz o array a um resultado de uma operação matemática
const numbers = [1, 34, 35]
const soma = numbers.reduce((valorAnterior, valorAtual) => {
    return valorAnterior + valorAtual
}, 20)
console.log(soma)

