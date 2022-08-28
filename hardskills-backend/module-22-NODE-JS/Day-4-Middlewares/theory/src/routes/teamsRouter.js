const express = require('express');
const router = express.Router();
const validateTeam = require('../middlewares/validateTeam');
const existingId = require('../middlewares/existingId');
let teams = require('../teams').teams
let nextId = require('../teams').nextId;
const apiCredentials = require('../middlewares/apiCredentials');


router.get('/:id', existingId, (req, res) => {
  const { id } = req.params;
  const team = teams.find((team) => team.id === Number(id));
  res.status(200).json(team);
})

router.get('/', (req, res) => {
  res.status(200).json(teams)
})

router.use(apiCredentials);

router.post('/', validateTeam, (req, res) => {
  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

router.put('/:id', existingId, validateTeam, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  if (team) {
    const index = teams.indexOf(team);
    const updated = { id, ...req.body };
    teams.splice(index, 1, updated);
    res.status(201).json(updated);
  } else {
    res.sendStatus(400);
  }
});

module.exports = router;
