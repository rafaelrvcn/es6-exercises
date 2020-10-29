const numbers = [0,1,2,3,4,5]

function parimpar (item) {
    if (numbers[item] % 2 === 0) {
        console.log(numbers[item] + " é par")
    } else {
        console.log(numbers[item] + " é ímpar")
    }
}

numbers.forEach(parimpar)


/* Exercício 1 - Par ou ímpar?
Altere o código a seguir para utilizar o método `forEach` de modo que a saída permaneça a mesma.
var numeros = [0,1,2,3,4,5];
for(var i = 0; i<= numeros.length; i++) {
    if(i % 2 === 0) {
        console.log(i + ' é par');
    } else {
        console.log(i + ' é ímpar');
    }
} */