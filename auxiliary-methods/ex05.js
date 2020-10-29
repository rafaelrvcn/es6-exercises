/* Exercício 5 - Sem duplicações
Faça uma função chamada `removeDuplicatas` que recebe um array de números inteiros e
remove todas as suas duplicadas.
Utilize as funções auxiliares: `reduce` e `find`.
* Exemplo: removeDuplicatas([1,2,3,3,4,5]) → [1,2,3,4,5] */

var array = [1,2,3,3,4,5,6,6,6,0,0,0]

let hasZero = false

var b = array.reduce(( acc, cur ) => {
    const equal = acc.find( (element) => element === cur )

    if (!equal) {
        if ((cur).toString() === '0' && !hasZero) {
            hasZero = true
            acc.push(cur)
        }
        if ((cur).toString() !== '0') {
        acc.push(cur)
        }
    }
    return acc
}, [])


console.log('B', b);