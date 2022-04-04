//Exercicio 1
let garrafaDagua = {
  tamanho: '1.5L',
  marca: 'Volvic',
  tampa: 'verde',
}

const addProp = (obje, chave, valor) => {
obje[chave] = valor;
}

addProp(garrafaDagua, 'status', 'meio cheia')

console.log(garrafaDagua)
//Exercicio 2
const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom',
};

const habs = (obje) => {
  const chaves = Object.keys(obje);
  for(hab of chaves){
    console.log(`${hab} Nivel: ${obje[hab]}`)
  }
}
habs(student2)
// Exercicio 3
