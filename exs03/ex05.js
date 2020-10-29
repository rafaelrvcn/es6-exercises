/* O código a seguir utiliza um velho truque do JavaScript para conseguir utilizar o valor do this 
que referência o objeto dentro do loop. Utilize os seus conhecimentos de ES6 para refatorá-lo da 
melhor maneira.
var equipe = {
    nome: 'Valentes da Glória',
    membros: ['Luciano', 'Maria', 'Virgínia', 'Daniela'],
    imprimeNomes: function() {
        var that = this;
        this.membros.forEach(function(membro) {
            console.log(membro + ' é da equipe ' + that.nome);
        })
    }
}

equipe.imprimeNomes(); */

const equipe = {
    nome: 'Valentes da Glória',
    membros: ['Luciano', 'Maria', 'Virgínia', 'Daniela'],
    imprimeNomes: function() {
        this.membros.forEach((membro) => {
            console.log(`${membro} é da equipe ${this.nome}`)

        }
    )}
}

equipe.imprimeNomes()