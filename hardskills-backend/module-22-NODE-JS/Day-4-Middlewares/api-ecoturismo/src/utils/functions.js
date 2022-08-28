const fs = require('fs').promises;
const path = require("path");

const readActivities = async () => {
  const file = '../datafile/activities.json';
  try {
    const contentFile = await fs.readFile(path.resolve(__dirname, file), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
}

const writeCacaoTrybe = async (newFile) => {
  const file = '../datafile/activities.json';
  try {
    const contentFile = await fs.writeFile(path.resolve(__dirname, file), newFile);
    return 'File atualizado';
  } catch (error) {
    return null;
  }
};

const getAllActivities = async () => {
  const activities = await readActivities();
  return activities;
}

const addActivite = async (body) => {
  const activities = await readActivities();
  activities.push(body);
  writeCacaoTrybe(JSON.stringify(activities));
}

module.exports = {
  getAllActivities,
  addActivite,
};