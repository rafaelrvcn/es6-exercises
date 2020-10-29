/* Exercício 2 - Quero o dobro
Utilizando o método `map`, escreva o método `dobrar` que recebe um array de números inteiros 
e retorna um array com todos os valores do array original dobrados. */

const numbers = [1,2,3]

function double (x) {
    return x * 2    
}

console.log(numbers.map(double));