// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  fetch(API_URL, {
    headers : { 
      'Accept': 'application/json'
    }})
  .then((response) => response.json())
  .then((joke) => {
    document.getElementById('jokeContainer').innerHTML = joke.joke
  }).catch((error) => console.log(`${error} \n Nah, nothing. Sorry.`))
};
window.onload = () => fetchJoke();