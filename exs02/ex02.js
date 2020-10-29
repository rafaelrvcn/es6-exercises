/* Desenvolva a função 'isListaVazia' que recebe como parâmetro uma lista de números 
inteiros qualquer e retorna o valor true caso esta lista não tenha nenhum item e false 
para os demais resultados. A lógica deve ser feita usando somente a propriedade done do 
objeto que é obtido ao executar o next no iterador do array. */

const numbers = [1,2,3,4]


function isListaVazia(lista) {
    const it = lista[Symbol.iterator]()
    
    return console.log(it.next().done)
}


isListaVazia(numbers)
