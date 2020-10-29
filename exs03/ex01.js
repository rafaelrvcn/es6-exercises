/* Utilize o que foi aprendido neste capítulo e refatore a função imprimeProduto para 
utilizar arrow functions. Não deixe de customizar o método para utilizar templates strings. */
/* let carrinho = [
    { nome: 'abacaxi', preco: '2.00' },
    { nome: 'detergente', preco: '2.50' },
    { nome: 'bolacha', preco: '3.80' }
]

carrinho.forEach(function(produto) {
    imprimeProduto(produto.nome, produto.preco);
})

function imprimeProduto(nome, preco) {
    console.log('Produto: ' + nome + ' | ' + 'Preço: ' + preco);
} */

let carrinho = [
    { nome: 'abacaxi', preco: '2.00' },
    { nome: 'detergente', preco: '2.50' },
    { nome: 'bolacha', preco: '3.80' }
]

const imprimeProduto = (nome, preco) => {
    console.log(`Produto: ${nome} | Preço: ${preco}`);
}

carrinho.forEach(function(produto) {
    imprimeProduto(produto.nome, produto.preco);
})




