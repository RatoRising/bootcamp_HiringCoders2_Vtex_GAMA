const form = document.getElementById('form')
form.addEventListener('submit', cadastrarProdutos)
function cadastrarProdutos() {
    let arraycadastro = [];
  
    if (localStorage.getItem('cadastroProdutos') != null) {
      arraycadastro = JSON.parse(localStorage.getItem('cadastroProdutos'));
    } else {
      arraycadastro;
    }
      
    let codigoProduto = document.getElementById('codigoProduto').value;
    let nomeProduto = document.getElementById('nomeProduto').value;
    let descricaoProduto = document.getElementById('descricaoProduto').value;
    let unidade = document.getElementById('unidade').value;
    let quantidade = document.getElementById('quantidade').value;
  
    var data = {
        codigoProduto,
        nomeProduto,
        descricaoProduto,
        unidade,
        quantidade,
    };
  
    arraycadastro.push(data);
    var dataJson = JSON.stringify(arraycadastro);
    localStorage.setItem("cadastroProdutos", dataJson);
  
  }