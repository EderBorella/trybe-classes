function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}
function encode(string) {
  return string.replace(/a/g, '1').replace(/e/g, '2').replace(/i/g, '3').replace(/o/g, '4')
    .replace(/u/g, '5').replace(/A/g, '1').replace(/E/g, '2').replace(/I/g, '3').replace(/O/g, '4').replace(/U/g, '5').replace(/é/g, '2').replace(/ó/g, '4').replace(/ú/g, '5')
}

function decode(string2) {
  return string2.replace(/1/g, 'a').replace(/2/g, 'e').replace(/3/g, 'i').replace(/4/g, 'o')
    .replace(/5/g, 'u');
}
function techList(array, nome) {
  let list = [];
  let orderedTechs = array.sort();
  if (array.length === 0) {
    return 'Vazio!';
  }
  for (i of orderedTechs) {
    list.push({ tech: i, name: nome });
  }
  return list;
}
function hydrate(string) {
  let drinks = (string.match(/\d+/g));
  let agua = 0;
  for (index of drinks) {
    agua += parseInt(index);
  }
  return agua > 1 ? `${agua} copos de água` : `${agua} copo de água`;
}

module.exports = {
  sum,
  myRemove,
  myFizzBuzz,
  encode,
  decode,
  techList,
  hydrate
};
