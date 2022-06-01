// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Morango', 'Uva s/ caroço'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = [`M&M's`, 'Mini-marshmallow', 'Leite Evaporado'];

const fruitSalad = (fruit, additional) => {
const display = [...fruit, ...additional];
return display;
};

const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

let userInfos = {...user, ...jobInfos};


const print = ({name, age, nationality, profession, squad, squadInitials}) => {
console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`)
};
print(userInfos);

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

const [saudacao, func] = saudacoes;

func(saudacao)

const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,});

console.log(getPosition(-19.8157, -43.9542));

const multiply = (number, value = 1) => {
  return number * value;
};

console.log(multiply(8));