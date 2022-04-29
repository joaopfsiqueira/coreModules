const http = require('http');

const port = 3000;


//metodo padrão do http para criar o servidor, onde esperamos SEMPRE um req e res.
// res é mandar a resposta para o cliente. No caso, res.write escreve na tela algo.
// SEMPRE é necessário usar o end, para não ficar em looping.
http.createServer((req, res), () => {
    res.write("Hello world");
    res.end();
})


// para rodar o servidor, precisamos passar o metodo listen, e o porta que queremos.
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});