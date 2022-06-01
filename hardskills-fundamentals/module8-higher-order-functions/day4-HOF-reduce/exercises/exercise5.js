const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const aCounter = (array) => {
  const regex = /[a,A]/g
  const containsA = (arr, letter) => arr += letter;
  const display = array.reduce(containsA)
  let allA = display.match(regex)

  console.log(allA.length)
}

const containsA2 = (arr, letter) => arr += letter.match(/[a,A]/g).length;

let display2 = names.reduce(containsA2,0)

console.log(display2)