const fs = require('fs').promises;
const simpson = require('./simpson.json');

addToSimpson = (n, nome) => {
  simpson.push({ id: n, name: nome })
  return simpson;
}

const main = async () => {
  try {
    await fs.writeFile('./simpson.json', JSON.stringify(addToSimpson('11', 'Nelson Muntz')));
    console.log('Acho que deu bom.')
  } catch (err) {
    console.error(`Deu ruim: ${err.message}`)
  }

}
main();