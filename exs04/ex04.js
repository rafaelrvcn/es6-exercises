/* EXERCÍCIO 4 - QUAL É O JEITO CERTO DE FAZER ISSO ENTÃO?
Um programador codificou o seguinte trecho:
const comida = new Comida('Feijão');
class Comida {
  constructor(nome) {
    this.nome = nome;
  }
}
Ao tentar executar, ele recebeu o seguinte erro:
ReferenceError: Comida is not defined
Por que aconteceu este erro? O que é preciso modificar para que o código funcione corretamente? */


class Comida {
  constructor(nome) {
    this.nome = nome;
  }
}

const comida = new Comida('Feijão');

// Este erro aconteceu pq diferente de funções, as classes não podem ser invocadas antes de serem
//"criadas", logo basta trocar a const comida para depois do código
//da classe e o rodará perfeitamente.