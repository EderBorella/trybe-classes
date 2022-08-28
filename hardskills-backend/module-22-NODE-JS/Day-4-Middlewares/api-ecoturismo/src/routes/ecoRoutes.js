const express = require('express');
const apiCredentials = require('../apiCredentials');
const descriptionValidator = require('../middleware/descriptionValidator');
const nameValidator = require('../middleware/nameValidator');
const newUserValidator = require('../middleware/newUserValidator');
const priceValidator = require('../middleware/priceValidator');
const functions = require('../utils/functions');
const router = express.Router();
const generateToken = require('../utils/generateToken');
const usersTools = require('../utils/usersTools');

router.get('/', async (req, res) => {
  const activities = await functions.getAllActivities();
  res.status(200).json(activities);
});

router.post('/singup', newUserValidator, async (req, res) => {
  const { body } = req;
  const token = generateToken();
  const newUser = await usersTools.addUser(body, token);
  res.status(201).json({ token: token })
})

router.use(apiCredentials);

router.post('/', nameValidator, priceValidator, descriptionValidator, async (req, res) => {
  const { body } = req;
  const newActivities = await functions.addActivite(body);
  res.status(201).json({ "message": "Atividade cadastrada com sucesso!" });
});

module.exports = router;