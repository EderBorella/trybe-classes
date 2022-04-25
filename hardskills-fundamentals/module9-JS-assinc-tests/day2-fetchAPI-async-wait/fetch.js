const fetch = require('node-fetch');
let teste = [];
const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  teste.push(fetch(url)
    .then((response) => response.json()))
    .then((data) => console.log(data.value));
}

fetchJoke();