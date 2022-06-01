const pokemons = [
  {
    name: 'Bulbasaur',
    type: 'Grass',
    ability: 'Razor Leaf',
  },
  {
    name: 'Charmander',
    type: 'Fire',
    ability: 'Ember',
  },
  {
    name: 'Squirtle',
    type: 'Water',
    ability: 'Water Gun',
  },
];
const chamaVolta = (pokemao, msg) =>{
  if (pokemao === null){
  console.log(msg)
  if (msg === null){
    console.log(pokemao)
  }
}
console.log(pokemao)
}
const filtro = (pokemao) => {
  return pokemons.find((element) => element.name === pokemao);
}
function getPokemonDetails(filter, callback) {
  const actFun = setTimeout(() => {
    if (filter === undefined) {
      return callback(new Error('Não temos esse pokémon para você :('), null);
    }
    const pokemon = filter;

    const { name, type, ability } = pokemon;

    const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

    callback(null, messageFromProfOak);
  }, 2000);
}

getPokemonDetails(filtro('Squirtle'), chamaVolta)
// console.log(filtro('noo'))
module.exports = {
  getPokemonDetails,
};