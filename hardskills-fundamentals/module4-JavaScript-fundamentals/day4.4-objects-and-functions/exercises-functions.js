function palindromo(word){
    let reverse = '';
    for(i = word.length - 1; i >= 0; i -= 1){
        reverse += word[i]
    }
    console.log(reverse == word ? true : false)
}

let numb = [2, 3, 6, 7, 10, 1];

function majPosit(array){
    let maj = array[0];
    for(index in array){
        if (array[index] > maj){
            maj = array[index]
        }
    }
    console.log(array.indexOf(maj))
}

function minPosit(array){
    let min = array[0];
    for(index in array){
        if (array[index] < min){
            min = array[index]
        }
    }
    console.log(array.indexOf(min))
}

let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function majString(array){
    let word = array[0]
    for(index in array){
        if (array[index].length > word.length){
            word = array[index]
        }
    }
    console.log(word)
}

let numbers = [2, 3, 2, 5, 8, 2, 3];

function getMostFrequent(arr) {
    const counter = arr.reduce( (acc, val) => {
    acc[val] = (acc[val] || 0 ) + 1
    return acc
    },{})
 console.log(Object.keys(counter).reduce((a, b) => counter[a] > counter[b] ? a : b))
 }

 function somatorio(n1){
     let soma = 0;
     for(let i = 0; i >= n1; i += 1){
        soma + i;
     }
     console.log(soma)
 };

 somatorio(5);