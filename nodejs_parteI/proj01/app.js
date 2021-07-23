// Incluindo uma biblioteca
const http = require('http');
const url = require('url');
const queryString = require('query-string');
const fs = require('fs');

// Definição de endereço / URL
const hostname = '127.0.0.1';
const port = 3000;

// Implementação da regra de negócio
const server = http.createServer((req, res) => {
  let resposta;
  const urlparse = url.parse(req.url, true);
  const params = queryString.parse(urlparse.search);

  // Criar / Atualizar um usuário
    if(urlparse.pathname == '/criar-atualizar-usuario'){
      // Salvar informações
      fs.writeFile('users/' + params.id + '.txt', JSON.stringify(params), function (err) {
        if (err) throw err;

        resposta = 'Usuario criado/atualizado com sucesso!';

        res.statusCode = 201;
        res.setHeader('Content-Type', 'text/plain');
        res.end(resposta);
      });
    }
  // Selecionar usuário
   else if(urlparse.pathname == '/selecionar-usuario'){
    // Salvar informações
    fs.readFile('users/' + params.id + '.txt', function (err, data) {

      resposta = data;

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(resposta);
    });
  }
  // Remover usuário
  else if(urlparse.pathname == '/deletar-usuario'){
     // Salvar informações
     fs.unlink('users/' + params.id + '.txt', function (err) {

       resposta = err ? 'Usuario nao encontrato!' : 'Usuario deletado com sucesso!';

       res.statusCode = 204;
       res.setHeader('Content-Type', 'text/plain');
       res.end(resposta);
     });
  }

});



// Execução / imprime no console onde o programa está rodando.
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// http://localhost:3000/criar-atualizar-usuario?nome=Rato&idade=35&peso=90&id=1
// http://localhost:3000/criar-atualizar-usuario?&nome=Rato&idade=39&peso=80&id=1
// http://localhost:3000/selecionar-usuario?id=1
// http://localhost:3000/deletar-usuario?id=4