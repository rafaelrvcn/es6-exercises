/* Exercício 11 - A pequena ovelha Dolly
Utilizando o método auxiliar `forEach`, crie uma função `clonaObjeto` 
que recebe como parâmetro um objeto e cria uma cópia exata dela.
* utilize o método `Object.getOwnPropertyNames` para obter as propriedades do objeto */

function clonaObjeto(objeto) {
    const property = Object.getOwnPropertyNames(objeto)
    const newObj = {}

    property.forEach((property) => {
        newObj[property] = objeto[property]
    })
    return newObj
}


const obj = {objeto: 'mesa'}
console.log(clonaObjeto(obj));
