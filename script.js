document.getElementsByClassName('dropdown')[0].addEventListener('click', abrirMenu1);

function abrirMenu1() {
    if (document.getElementsByClassName('dropdown-content')[0].style.display == "none") {
        document.getElementsByClassName('dropdown-content')[0].style.display = "block";
        document.getElementsByTagName('button')[0].innerHTML = "Fechar"
        document.getElementsByTagName('button')[0].style.background = "#8C52E5";
        document.getElementsByTagName('button')[0].style.color = "white";
    } else {
        document.getElementsByClassName('dropdown-content')[0].style.display = "none";
        document.getElementsByTagName('button')[0].innerHTML = "Abrir"
        document.getElementsByTagName('button')[0].style.background = "white";
        document.getElementsByTagName('button')[0].style.color = "#8C52E5";
    }
}

document.getElementsByClassName('dropdown')[1].addEventListener('click', abrirMenu2);

function abrirMenu2() {
    if (document.getElementsByClassName('dropdown-content')[1].style.display == "none") {
        document.getElementsByClassName('dropdown-content')[1].style.display = "block";
        document.getElementsByTagName('button')[1].innerHTML = "Fechar"
        document.getElementsByTagName('button')[1].style.background = "#8C52E5";
        document.getElementsByTagName('button')[1].style.color = "white";
    } else {
        document.getElementsByClassName('dropdown-content')[1].style.display = "none";
        document.getElementsByTagName('button')[1].innerHTML = "Abrir"
        document.getElementsByTagName('button')[1].style.background = "white";
        document.getElementsByTagName('button')[1].style.color = "#8C52E5";
    }
}

document.getElementsByClassName('dropdown')[2].addEventListener('click', abrirMenu3);

function abrirMenu3() {
    if (document.getElementsByClassName('dropdown-content')[2].style.display == "none") {
        document.getElementsByClassName('dropdown-content')[2].style.display = "block";
        document.getElementsByTagName('button')[2].innerHTML = "Fechar"
        document.getElementsByTagName('button')[2].style.background = "#8C52E5";
        document.getElementsByTagName('button')[2].style.color = "white";
    } else {
        document.getElementsByClassName('dropdown-content')[2].style.display = "none";
        document.getElementsByTagName('button')[2].innerHTML = "Abrir"
        document.getElementsByTagName('button')[2].style.background = "white";
        document.getElementsByTagName('button')[2].style.color = "#8C52E5";
    }
}

document.getElementsByClassName('dropdown')[3].addEventListener('click', abrirMenu4);

function abrirMenu4() {
    if (document.getElementsByClassName('dropdown-content')[3].style.display == "none") {
        document.getElementsByClassName('dropdown-content')[3].style.display = "block";
        document.getElementsByTagName('button')[3].innerHTML = "Fechar"
        document.getElementsByTagName('button')[3].style.background = "#8C52E5";
        document.getElementsByTagName('button')[3].style.color = "white";
    } else {
        document.getElementsByClassName('dropdown-content')[3].style.display = "none";
        document.getElementsByTagName('button')[3].innerHTML = "Abrir"
        document.getElementsByTagName('button')[3].style.background = "white";
        document.getElementsByTagName('button')[3].style.color = "#8C52E5";
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