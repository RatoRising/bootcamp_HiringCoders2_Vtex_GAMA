var pilha = []; // vetor ou array
var topo = -1; // esse valor indica uma pilha vazia
const tamanhoPilha = 6; // máximo de itens suportados na pilha

// O itemDaPilha, é o valor a ser inserido na função push()
function push(itemDaPilha) {
    if (topo < tamanhoPilha) {
        topo = topo + 1;
        pilha[topo] = itemDaPilha;
    } else {
        console.log("A pilha está cheia!")
    }
}

function vazia() {
    return topo == -1
}

function pop() {
    if (topo != -1) {
        let itemDaPilha = pilha[topo];
        topo = topo - 1;
        return itemDaPilha;
    } else {
        console.log("Pilha está vazia")
    }
}
/*
push("Caixa 1");
push("Caixa 2");
push("Caixa 3");
push("Caixa 4");
push("Caixa 5");
push("Caixa 6");
push("Caixa 7");
push("Caixa 8");
console.log(pilha)
console.log(pop())
*/

var numDecimal = 10;
var resto;

console.log("Empilhando...........")
while (numDecimal != 0) {
    resto = parseInt(numDecimal % 2);
    push(resto);
    console.log(resto)
    numDecimal = parseInt(numDecimal / 2);
}

console.log("Despilhando..........")
while (!vazia()) {
    console.log(pop())
}


