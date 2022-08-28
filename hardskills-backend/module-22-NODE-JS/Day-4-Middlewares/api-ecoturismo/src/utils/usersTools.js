const fs = require('fs').promises;
const path = require("path");

const readUsers = async () => {
  const file = '../datafile/users.json';
  try {
    const contentFile = await fs.readFile(path.resolve(__dirname, file), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
}

const writeUsers = async (newFile) => {
  const file = '../datafile/users.json';
  try {
    const contentFile = await fs.writeFile(path.resolve(__dirname, file), newFile);
    return 'File atualizado';
  } catch (error) {
    return null;
  }
};

const addUser = async (body, token) => {
  const users = await readUsers();
  users.push({ token: token, ...body });
  writeUsers(JSON.stringify(users));
}

module.exports = {
  addUser,
};