/*
var valores = [5, 8, 10, 22, 45, 38];

function busca(num) {
    for (let i = 0; i < 6; i++)
    if (num == valores[i]) {
        return `O valor ${num} está na posição ${[i]}.`
    }
    return `O valor ${num}, não consta na lista.`
}

console.log(busca(22))
console.log(busca(44))
*/

var valores = [5, 8, 10, 22, 38, 45, 60, 90, 100, 120];
// var num = Number(prompt("Insira o valor a ser buscado"))
function buscaBin(num) {
    let fim = 9;
    let inicio = 0;
    let meio;
    let passos = 0;

    while (inicio <= fim) {
        meio = parseInt((inicio + fim) / 2);
        passos = passos + 1;
        if (num == valores[meio]) {
            return console.log(`O valor ${num} está na posição ${[meio]} e foi encontrado em ${passos} passos.`)
        } else if (num > valores[meio]) {
            inicio = meio + 1;
        } else {
            fim = meio - 1;
            return `Foram executados ${passos}, mas o ${num} não foi encontrado na lista.`
        }
    }
}
console.log(buscaBin(90))
console.log(buscaBin(44))