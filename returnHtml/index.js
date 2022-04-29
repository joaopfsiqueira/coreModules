const http = require('http');

const port = 3000;


//metodo padrão do http para criar o servidor, onde esperamos SEMPRE um req e res.
// res é mandar a resposta para o cliente. No caso, estamos mandando html. Mas isso , precisamos setar o contenttype como html para
// SEMPRE é necessário usar o end, para não ficar em looping.
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1> Passando HTML pelo res.end </h1>');
})


// para rodar o servidor, precisamos passar o metodo listen, e o porta que queremos.
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});