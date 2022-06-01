// Exercicio 1:

// - Criar a variavel que queremos fatorar. (number)
// - Criar uma variavel para contar os valores da fatoração. (fator)
// - Criar um loop de 10 a 1.
// - Para cada loop, multiplicar pelo valor contido na variavel fator.
// - Substituar a variavel fator pelo resultado da multiplicação.
// - Imprimir a variavel fator.

// let number = 10;
// let fator = 1;
// for(i = number; i >= 1; i -= 1){
// fator *= i;
// }
// console.log(fator)

// Exercicio 2:
// - Adicionar a variavel com a palavra a ser invertida. (word)
// - Criar variavel inverseWord.
// - Adicionar um loop para percorrer do ultimo até o primeiro caracter da string word.
// - A cada loop, inserir o resultado na variavel inverseWord.
// - Imprimir inverseWord.

// let word = '123456789';
// let inverseWord = '';

// for(i = word.length - 1; i >= 0; i -= 1){
//     inverseWord += word[i];
// }

// console.log(inverseWord)

// Exercicio 3:
// - Adicionar o array.
// - Criar uma variavel para conter a maior palavra, com valor inicial do item 0 da array.
// - Criar um loop for para navegar a array.
// - Criar uma condicional para comparar o numero de caracteres de cada posição com a palavra da variavel.
// - A cada loop, conferir se a palavra da array é maior do que a variavel, se sim, substituir a variavel.
// - Imprimir variavel.
// - Para descobrir a menor palavra, basta inverter a condicional.


// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let bigWord = array[0];


// for(let i = 0; i < array.length; i += 1){
//     if(array[i].length < bigWord.length){
//         bigWord = array[i]
//     }
// }
// console.log(bigWord)

// Exercicio 4:
// - Criar uma array para conter os numeros primos.
// - Criar um loop para de 2 a 50.
// - Criar variavel para servir de verificador.
// - Criar outro loop dentro do primeiro para servir como divisor do primeiro loop sendo seu limite o numero do primeiro loop.
// - Criar uma condição para que o numero do primeiro loop divido por todos os numeros do segundo loop tenha sempre resto igual a 0.
// - Caso positivo, muda o verificador para 1.
// - Dentro do primeiro loop, criar outra condicional, caso aquele numero do loop tenho mudado o verificador para 1, adicionar aquele numero na array primos.
// - Criar uma variavel para conter o maior numero primo., valor inicial é o primeiro elemento da array primos.
// - Criar um outro loop independente para percorrer os valores da array primos.
// - Criar uma condicional para checar se o numero da array é maior que o da variavel.
// - Caso positivo, substituir a variavel por ele.
// - Imprimir a variavel.

let array = [];



for (let i = 2; i <= 50; i += 1) {
    let primo = 0;

    for (let j = 2; j < i; j += 1) {
        if (i % j == 0) {
            primo = 1;
        }
    }


    if (i > 1 && primo == 0) {
        array.push(i);
    }
}

let maiorPrimo = array[0];
for(k = 0; k < array.length; k += 1){
    
    if(array[k] > maiorPrimo){
        maiorPrimo = array[k]
    }
}

console.log('O maior primo entre 1 e 50 é: ' + maiorPrimo + '.')