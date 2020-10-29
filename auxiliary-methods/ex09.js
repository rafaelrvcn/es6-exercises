/* Exercício 9 - Raízes quadradas
Crie uma função chamada `calculaRaizesQuadradas` que recebe um array de números inteiros 
positivos e devolve um outro array com as raízes quadradas correspondentes de cada um dos itens.
* para este exercício, assuma que a entrada terá somente números com raiz exata.
* utilize a função Math.sqrt para calcular a raiz quadrada */

const array = [ 4, 9, 16, 25]


const arrayQuadrada =  array.map(function calculaRaizesQuadradas(x) {
    return Math.sqrt(x)
})

console.log(arrayQuadrada);