const express = require('express');
const cacaoTrybe = require('./cacaoTrybe');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.put('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const chocolate = await cacaoTrybe.editChocolateId(Number(id), body);
  res.status(200).json({ chocolate });
})

app.get('/chocolates/search', async (req, res) => {
  const { name } = req.query;
  const chocolates = await cacaoTrybe.getChocolatesByName(name);

  if (chocolates.length === 0) {
    return res.status(404).json({ chocolates })
  }

  return res.status(200).json({ chocolates });
})

app.get('/chocolates/total', async (req, res) => {
  const totalChocolates = await cacaoTrybe.getChocolatesTotal();
  res.status(200).json({ totalChocolates });
})

app.get('/chocolates', async (req, res) => {
  const chocolates = await cacaoTrybe.getAllChocolates();
  res.status(200).json({ chocolates });
})

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const chocolate = await cacaoTrybe.getChocolateById(Number(id));
  res.status(200).json({ chocolate });
})

app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { brandId } = req.params;
  const chocolates = await cacaoTrybe.getChocolatesByBrand(Number(brandId));
  res.status(200).json({ chocolates });
})

module.exports = app;

