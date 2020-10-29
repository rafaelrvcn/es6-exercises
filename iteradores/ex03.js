/* EXERCÍCIO 3 - S-O-L-E-T-R-A-N-D-O
Utilizando os aprendizados deste capítulo, implemente a função soletraPalavra que recebe como 
único parâmetro uma String e então exibe cada letra da String em uma linha do console. */



function soletraPalavra (string) {
    let iString = string[Symbol.iterator]()
    let word = iString.next()

    for(let i of string) {

      console.log(word.value)
      word = iString.next() 
      
    }
  }

soletraPalavra("Rafael")