const fs = require('fs').promises;
const { join } = require('path');

const readCacaoTrybe = async () => {
  const path = '/files/cacaoTrybeFile.json';
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const writeCacaoTrybe = async (newFile) => {
  const path = '/files/cacaoTrybeFile.json';
  try {
    const contentFile = await fs.writeFile(join(__dirname, path), newFile);
    return 'File atualizado';
  } catch (error) {
    return null;
  }
};

const getAllChocolates = async () => {
  const cacaoTrybe = await readCacaoTrybe();
  return cacaoTrybe.chocolates;
}

const getChocolateById = async (id) => {
  const cacaoTrybe = await readCacaoTrybe();
  return cacaoTrybe.chocolates
    .filter((chocolate) => chocolate.id === id);
}

const getChocolatesByBrand = async (brandId) => {
  const cacaoTrybe = await readCacaoTrybe();
  const filtered = cacaoTrybe.chocolates
    .filter((chocolate) => chocolate.brandId === brandId);
  return filtered;
};

const getChocolatesTotal = async () => {
  const cacaoTrybe = await readCacaoTrybe();
  return cacaoTrybe.chocolates.length;
}

const getChocolatesByName = async (name) => {
  const cacaoTrybe = await readCacaoTrybe();

  return cacaoTrybe.chocolates.filter((chocolate) => chocolate.name.includes(name));
}

const editChocolateId = async (id, body) => {
  const cacaoTrybe = await readCacaoTrybe();
  const index = cacaoTrybe.chocolates.findIndex((chocolate) => chocolate.id === id);
  cacaoTrybe.chocolates[index].name = body.name;
  cacaoTrybe.chocolates[index].brandId = body.brandId;
  writeCacaoTrybe(cacaoTrybe)
  return cacaoTrybe.chocolates[index];
}

module.exports = {
  getAllChocolates,
  getChocolateById,
  getChocolatesByBrand,
  getChocolatesTotal,
  getChocolatesByName,
  editChocolateId,
};