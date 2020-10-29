/* Exercício 3 - NÃO ESTOU BRAVO
Escreva o método `caps` que recebe um array de strings e retorna um outro array 
com todas as strings do array original em CAIXA ALTA. */

const stringArray = ["oi", "tudo", "bem?"]

function toUpperCase (item, indice) {
    stringArray[indice] = stringArray[indice].toUpperCase()

}

stringArray.forEach(toUpperCase)
console.log(stringArray)