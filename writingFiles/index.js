const fs = require('fs');
const http = require('http');

const port = 3000;

//metodo padrão do http para criar o servidor, onde esperamos SEMPRE um req e res.
// res é mandar a resposta para o cliente. No caso, res.write escreve na tela algo.
// SEMPRE é necessário usar o end, para não ficar em looping.
const server = http.createServer((req, res) => {

    const urlInfo = require('url').parse(req.url, true);
    const name = urlInfo.query.name;

    if (!name) {
        fs.readFile('index.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data); //escrevendo o conteudo do arquivo buscado
            return res.end();
        })
    } else {
        fs.writeFile('arquivo.txt', name, function(err, data) {
            res.writeHead(302, {
                Location: '/',
            });
            return res.end();
        })
    }



})


// para rodar o servidor, precisamos passar o metodo listen, e o porta que queremos.
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});