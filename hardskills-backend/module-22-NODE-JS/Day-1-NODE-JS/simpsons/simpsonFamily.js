const fs = require('fs').promises;
const simpson = require('./simpson.json');

const simpsonFamily = () => {
  let simpNew = [];
  simpson.forEach((s) => s.id > 0 & s.id <= 5 && simpNew.push(s))
  return simpNew;
}

const main = async () => {
  try {
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonFamily()));
    console.log('Acho que deu bom.')
  } catch (err) {
    console.error(`Deu ruim: ${err.message}`)
  }

}
main();