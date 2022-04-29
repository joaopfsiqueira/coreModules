//primeiro importamos o core module.
const url = require('url');
const address = 'https://www.meusite.com.br/catalog?produtos=cadeira'

//aqui a gente aplica o address acima no método URL que existe dentro do url que importamos
//e jogamos dentro dele o address.
const parsedUrl = new url.URL(address)

//como o url.URL tem diversos métodos, podemos acessar os métodos como se fosse um objeto.
console.log(parsedUrl.host)
console.log(parsedUrl.pathname)
console.log(parsedUrl.search)
console.log(parsedUrl.searchParams)
console.log(parsedUrl.searchParams.get('produtos'))