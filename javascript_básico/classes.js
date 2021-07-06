// CRIANDO UMA CLASSE

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    read() {
        return `Estou lendo ${this.title}`
    }
}

let book = new Book('Algoritmos', "Brian", 500)
let otherBook = new Book ("Outro Livro", "Outro Autor", 100)
console.log(otherBook.read())