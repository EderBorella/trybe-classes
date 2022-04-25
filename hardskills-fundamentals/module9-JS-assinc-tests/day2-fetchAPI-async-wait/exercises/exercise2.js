var requestOptions = {
  'method': 'GET',
  'Accept': 'application/json',
  'redirect': 'follow'
};

fetch("https://api.coincap.io/v2/assets", requestOptions)
  .then(response => response.json())
  .then(result => {
    for (let index = 0; index < 10; index += 1) {
      const coin = document.createElement('li')
      coin.innerText = `The ${result.data[index].name} price is: ${parseFloat(result.data[index].priceUsd).toFixed(2)}.`;
      document.getElementById('coinContainer').appendChild(coin)
    }})
  .catch(error => console.log('error', error));
