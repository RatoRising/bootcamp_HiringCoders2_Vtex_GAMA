// Página inicial "SPA"
const botaoClientes = document.getElementById('clientes')
const botaoProdutos = document.getElementById('produtos')
const iframe = document.getElementById('iframe')

botaoClientes.addEventListener('click', clienteArea)
botaoProdutos.addEventListener('click', produtoArea)

function clienteArea() {
    iframe.src = `/desafio_2/pages/clientes.html`
}

function produtoArea() {
    iframe.src = `/desafio_2/pages/produtos.html`
}

