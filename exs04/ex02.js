/* EXERCÍCIO 2 - O MEU VIDEOGAME É MUITO MELHOR QUE O SEU
Aproveitando a classe VideoGame criada no exercício anterior, implemente a classe
 PlayStation que contém todas as propriedades do VideoGame mais as seguintes proprieades:
nEntradasUSB: inteiro que representa a quantidade de entradas usb do console
voltagem: inteiro que representa a voltagem do console.
adicionais: array de strings que representam os nomes dos adicionais do videogame 
(ex: adicionais=['Controle sem fio', 'Volante'])
Não esqueça de invocar um objeto da classe. */

const arrayAdds = ['Controle sem fio', ' Volante']

class VideoGame {
    constructor(marca, nControles, tipoMidia) {
        this.marca = marca
        this.nControles = nControles
        this.tipoMidia = tipoMidia
    }
}

class PlayStation extends VideoGame {
    constructor(marca, nControles, tipoMidia, nEntradasUSB, voltagem, adicionais ){
        super(marca, nControles, tipoMidia)
        this.nEntradasUSB = nEntradasUSB
        this.voltagem = voltagem
        this.adicionais = adicionais
    }
}

const newPlay = new PlayStation('sony', '2', 'dvd', '2', '110', arrayAdds)

console.log(newPlay);