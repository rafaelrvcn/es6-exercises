function validaParenteses(parenteses) {
    const aParenteses = parenteses.split("")

    const validatingP = !aParenteses.reduce((acc, curr) => {
      if (acc < 0) { 
        return acc 
      }
      if (curr === "(") {
        return ++acc
      }
      if (curr === ")") {
        return --acc
      }
      
    }, 0)
    return validatingP
}

console.log(validaParenteses("()((()()())))))"))

/* Exercício 4 - Equilibrio de parênteses
Utilizando a função auxiliar `reduce`, escreva uma função chamada `validaParenteses` 
que avalia se os parênteses estão balanceados. Isso significa que, pra cada parênteses 
esquerdo “(“ é necessário ter um parênteses direito “)” correspondente. 
A função deve aceitar uma `string` e retornar um valor booleano (true ou false).
* Exemplo: validaParenteses(')((()()())))'); →  false
* Exemplo: "()()()" → true
* Exemplo: ")(" → false */