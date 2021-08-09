var dropdownContent = document.getElementsByClassName('dropdown-content')
var botao = document.getElementsByTagName('button')

botao[0].addEventListener('click', abrirMenu1);

function abrirMenu1() {
    if (dropdownContent[0].style.display == "") {
        dropdownContent[0].style.display = "block";
        botao[0].innerHTML = "Fechar";
        botao[0].style.background = "#8C52E5";
        botao[0].style.color = "white";
    } else {
        dropdownContent[0].style.display = "";
        botao[0].innerHTML = "Abrir"
        botao[0].style.background = "white";
        botao[0].style.color = "#8C52E5";
    }
}

botao[1].addEventListener('click', abrirMenu2);

function abrirMenu2() {
    if (dropdownContent[1].style.display == "") {
        dropdownContent[1].style.display = "block";
        botao[1].innerHTML = "Fechar";
        botao[1].style.background = "#8C52E5";
        botao[1].style.color = "white";
    } else {
        dropdownContent[1].style.display = "";
        botao[1].innerHTML = "Abrir";
        botao[1].style.background = "white";
        botao[1].style.color = "#8C52E5";
    }
}

botao[2].addEventListener('click', abrirMenu3);

function abrirMenu3() {
    if (dropdownContent[2].style.display == "") {
        dropdownContent[2].style.display = "block";
        botao[2].innerHTML = "Fechar";
        botao[2].style.background = "#8C52E5";
        botao[2].style.color = "white";
    } else {
        dropdownContent[2].style.display = "";
        botao[2].innerHTML = "Abrir";
        botao[2].style.background = "white";
        botao[2].style.color = "#8C52E5";
    }
}

botao[3].addEventListener('click', abrirMenu4);

function abrirMenu4() {
    if (dropdownContent[3].style.display == "") {
        dropdownContent[3].style.display = "block";
        botao[3].innerHTML = "Fechar";
        botao[3].style.background = "#8C52E5";
        botao[3].style.color = "white";
    } else {
        dropdownContent[3].style.display = "";
        botao[3].innerHTML = "Abrir";
        botao[3].style.background = "white";
        botao[3].style.color = "#8C52E5";
    }
}


/*
const dropmenu = document.querySelectorAll('.dropdown');

dropmenu.forEach((dropdown) =>
    dropdown.addEventListener('click', () => {

        if (document.querySelectorAll('.dropdown-content')[0].style.display == "none") {
            document.querySelectorAll('.dropdown-content')[0].style.display = "block";
        } else {
            document.querySelectorAll('.dropdown-content')[0].style.display = "none";
        }
    })
);
*/