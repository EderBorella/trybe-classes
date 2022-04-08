// // pratica 1
// const emailListInData = [
//   'roberta@email.com',
//   'paulo@email.com',
//   'anaroberta@email.com',
//   'fabiano@email.com',
// ];

// const showEmailList = (email) => {
//   console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
// };

// emailListInData.forEach(showEmailList)

// pratica 2
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (e) => {
  if(e % 3 === 0 && e % 5 === 0){
    return e;
  }
}

// console.log(numbers.find(findDivisibleBy3And5))

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (name) => name.length === 5 ? name : null;

// console.log(names.find(findNameWithFiveLetters));

// pratica 3
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(music) {
  if (music.id === '31031685'){
    return music.title;
  }
}
// console.log(musicas.find(findMusic))

// pratica 4
const names2 = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((e) => e === name);

// console.log(hasName(names2, 'Ana'))

// pratica 5
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => arr.every((e) => e.age >= minimumAge);


// console.log(verifyAges(people, 18));

// pratica 6
const people2 = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people2.sort((a,b) => a.value - b.value)

console.log(people2.sort((a,b) => a.age - b.age));
console.log(people2.sort((a,b) => b.age - a.age));