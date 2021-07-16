

const form = document.getElementById('form')


form.addEventListener('submit', cadastrar) 

function cadastrar() {
    let nome = document.getElementById('nome').value;
    let celular = document.getElementById('celular').value
    let email = document.getElementById('email').value;
    let data = {
        nome,
        celular,
        email,
    }
    
    let convertData = JSON.stringify(data);
    localStorage.setItem('lead', convertData)
}

// Não consegui identificar o funcionamento do e.preventDefault()
/*
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome, 
        email,
    }
    
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData)
})*/


