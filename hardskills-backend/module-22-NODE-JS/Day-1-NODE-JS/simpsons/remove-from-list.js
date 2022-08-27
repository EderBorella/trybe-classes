const fs = require('fs').promises;
const simpson = require('./simpson.json');


const removeSimpson = (n) => {
  const searchSimpson = simpson.findIndex((s) => s.id == n);
  simpson.splice(searchSimpson, 1);
  return simpson;
}

removeSimpson(6);
removeSimpson(10);

const main = async () => {
  try {
    await fs.writeFile('./simpson.json', JSON.stringify(simpson));
    console.log('Acho que deu bom.')
  } catch (err) {
    console.error(`Deu ruim: ${err.message}`)
  }

}
main();