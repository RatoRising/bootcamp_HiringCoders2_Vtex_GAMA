// Salvando no localStorage

const form = document.getElementById('form')

form.addEventListener('submit', cadastrarClientes)
function cadastrarClientes() {
    let arraycadastro = [];
  
    if (localStorage.getItem('cadastroClientes') != null) {
      arraycadastro = JSON.parse(localStorage.getItem('cadastroClientes'));
    } else {
      arraycadastro;
    }
      
    let nome = document.getElementById('nome').value;
    let cpf = document.getElementById('cpf').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let cep = document.getElementById('cep').value;
    let logradouro = document.getElementById('logradouro').value;
    let numero = document.getElementById('numero').value;
    let complemento = document.getElementById('complemento').value;
    let cidade = document.getElementById('cidade').value;
    let estado = document.getElementById('estado').value;
  
    var data = {
        nome,
        cpf,
        email,
        telefone,
        cep,
        logradouro,
        numero,
        complemento,
        cidade,
        estado,
    };
  
    arraycadastro.push(data);
    var dataJson = JSON.stringify(arraycadastro);
    localStorage.setItem("cadastroClientes", dataJson);
  
  }