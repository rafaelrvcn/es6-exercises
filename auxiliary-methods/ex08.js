/* Exercício 8 - Calculadora humana
Crie uma função `calculaAreaTotal` que recebe um parâmetro:
- dimensoes: objeto que possui as propriedades `altura` e `comprimento` que são números inteiros
A função deve retornar a soma de todas as áreas.
Tome como base a entrada a seguir:
``` javascript
var dimensoes = [
  { altura: 10, comprimento: 20},
  { altura: 2, comprimento: 4},
  { altura: 1, comprimento: 1},
  { altura: 50, comprimento: 50}
] */

const dimensoes = [
    { altura: 10, comprimento: 20},
    { altura: 2, comprimento: 4},
    { altura: 1, comprimento: 1},
    { altura: 50, comprimento: 50}
]

const totalArea =  dimensoes.reduce((dimensTotal, dimens) => {
    const dimensItem = dimens.altura * dimens.comprimento
    return dimensItem + dimensTotal
}, 0)

console.log(totalArea);