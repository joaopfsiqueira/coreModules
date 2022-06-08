const http = require('http');

const port = 3000;


//metodo padrão do http para criar o servidor, onde esperamos SEMPRE um req e res.
// res é mandar a resposta para o cliente. No caso, res.write escreve na tela algo.
// SEMPRE é necessário usar o end, para não ficar em looping.
const server = http.createServer((req, res) => {
    const urlInfo = require('url').parse(req.url, true);
    const name = urlInfo.query.name;


    if(!name) {
        res.end('<h1>Preencha o seu nome:</h1><form method="GET"><input type="text" name="name"/><input type="submit" value="enviar"/> </form>');
    } else {
        res.end(`<h1>Seja bem-vindo ${name}</h1>`);
    }
})


// para rodar o servidor, precisamos passar o metodo listen, e o porta que queremos.
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});