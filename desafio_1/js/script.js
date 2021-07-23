const form = document.getElementById('form')

form.addEventListener('submit', cadastrar) 

function cadastrar(event) {
    event.preventDefault()
    let botao = document.getElementById("botao");
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome,
        email,
    }

    if (nome === "" || email === "") {
        return alert("Todos os campos devem ser preenchidos!")
    }
    
    let convertData = JSON.stringify(data);
    localStorage.setItem('lead', convertData)
    botao.value = "Cadastrado com sucesso!"
}

/*
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let botao = document.getElementById("botao")
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome,
        email,
    }
    
    if (nome === "" || email === "") {
        return alert("Todos os campos devem ser preenchidos!")
    }

    let convertData = JSON.stringify(data);
    localStorage.setItem('lead', convertData)
    botao.value = "Cadastrado com sucesso!"
})
*/