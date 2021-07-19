// Fizzbuzz
// Divisível por 3 = "Fizz" - OK
// Divisível por 5 = "Buzz" - OK
// Divisível por 3 e 5 = "fizzBuzz" - OK
// Se não for um número = "Não é um número"
// Se não for divisível por 3 e nem por 5 = "Retorna ele mesmo" - OK

// Minha solução
var entrada = ''

function fizzBuzz() {
    if (typeof entrada !== "number") {
        return "Não é um número"
    } else if (entrada % 3 === 0 && entrada % 5 === 0) {
        return "FizzBuzz"
    } else if (entrada % 3 !== 0 && entrada % 5 !== 0) {
        return entrada
    } else if (entrada % 3 === 0) {
        return "Fizz"
    } else if (entrada % 5 === 0) {
        return "Buzz"
    }
}
console.log(fizzBuzz())

// Solução da Gama
let resultado = fizzBuzz()
console.log(resultado)

function fizzBuzz(entrada) {
    if (typeof entrada !== 'number')
        return 'Não é um número'
    if ((entrada % 3 === 0) && (entrada % 5 === 0))
        return 'FizzBuzz'
    if (entrada % 3 === 0)
        return 'Fizz'
    if (entrada % 5 === 0)
        return 'Buzz'

    return entrada
}