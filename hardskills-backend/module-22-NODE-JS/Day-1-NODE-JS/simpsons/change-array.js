const fs = require('fs').promises;
const simpsonFamily = require('./simpsonFamily.json');

const changeSimp = () => {
  const searchSimpson = simpsonFamily.findIndex((s) => s.name == 'Maggie Simpson');
  const searchSimpsonId = simpsonFamily.find((s) => s.name == 'Maggie Simpson');
  simpsonFamily.splice(searchSimpson, 1, { id: searchSimpsonId.id.toString(), name: 'Nelson Muntz' });
  return simpsonFamily;
}

const main = async () => {
  try {
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(changeSimp()));
    console.log('Acho que deu bom.')
  } catch (err) {
    console.error(`Deu ruim: ${err.message}`)
  }

}
main();