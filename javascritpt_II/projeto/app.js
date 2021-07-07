// Importações de dados da base e da biblioteca
const livros = require('./database')
const readline = require('readline-sync')

//pegar o input 
const entradaInicial = readline.question('Deseja buscar um livro?S/N')

//Se for Sim, mostra as categorias disponiveis, pergunta qual categoria ela escolhe
if (entradaInicial.toLocaleUpperCase() === 'S') {
  console.log('Essas são as categorias disponiveis:')
  console.log('Produtividade', '/ História brasileira', '/ Americas', '/ Estilo de vida', '/ Tecnologia')

  const entradaCategoria = readline.question('Qual categoria você escolhe:')

  const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

  console.table(retorno)
//Se não, mostra todos os livros em ordem crescente pela quantidade de páginas
} else {
  const livrosOrdenados = livros.sort((a,b)=> a.paginas - b.paginas)
  console.log('Essas são todos os livros disponiveis:')
  console.table(livrosOrdenados)
}