const fs = require('fs/promises');
const path = require("path");

// como vamos ler arquivos assincronamente, precisamos do async
module.exports = async function apiCredentials(req, res, next) {
  // pega o token do cabeçalho, se houver
  const token = req.header('X-API-TOKEN');
  // lê o conteúdo do `./authdata.json` (relativo à raiz do projeto)
  const file = '../src/datafile/users.json';
  const users = await fs.readFile(path.resolve(__dirname, file), 'utf-8');  // readFile nos deu uma string, agora vamos carregar um objeto a partir dela
  const authorized = JSON.parse(users);

  if (token.length === 16 && authorized.find((u) => u.token === token)) {
    next(); // pode continuar
  } else {
    res.status(401).json({ "message": "Token inválido!" }); // não autorizado
  }
};