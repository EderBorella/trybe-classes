const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo
const toObject = (array) => {
  const [carro, fabrica, ano] = array;
  return {
    carro,
    fabrica,
    ano,
  }
};
const obj1 = toObject(chiron);
const obj2 = toObject(shelbyCobra);
const obj3 = toObject(palio);

const carros = {obj3, obj2, obj1};
console.log(carros);