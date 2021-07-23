// Incluindo uma biblioteca
const http = require('http');
const url = require('url');
const queryString = require('query-string');

// Definição de endereço / URL
const hostname = '127.0.0.1';
const port = 3000;

// Implementação da regra de negócio
const server = http.createServer((req, res) => {

  // Pegar pergunta na URL
  const params = queryString.parse(url.parse(req.url, true).search);

  // Verifica a pergunta e escolher a resposta
  let resposta;
  if (params.pergunta == 'melhor-filme'){
    resposta = 'O filme que eu gosto!'
  } else if (params.pergunta == 'melhor-tech'){
    resposta = 'A tech que eu gosto!'
  } else {
    resposta = 'Vish, sei não!'
  }

  // Retornar a resposta escolhida


  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(resposta);
});

// Execução / Envio para o serviidor
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});