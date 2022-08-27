const express = require('express');

const app = express();

app.use(express.json());

const activities = [
  {
    id: 1,
    description: 'Banho no cachorro',
    status: 'A fazer',
  },
  {
    id: 2,
    description: 'Cortar a grama',
    status: 'A fazer',
  },
  {
    id: 3,
    description: 'Estudar JavaScript',
    status: 'Feito',
  },
];

app.get('/myActivities', (req, res) => res.status(200).json(activities));

app.get('/myActivities/:id', (req, res) => {

  const { id } = req.params;

  const task = activities.find((a) => a.id === Number(id));

  res.status(200).json({ task });
})

app.get('/filter/myActivities', (req, res) => {
  const status = req.query.status;

  const statusFeito = (stat) => {
    let result = activities.filter((a) => a.status === stat);
    return result;
  }

  console.log(status);
  switch (status) {
    case 'Feito':
      res.status(200).json({ activities: statusFeito(status) })
    case 'A fazer':
      res.status(200).json({ activities: statusFeito(status) })
    default:
      res.status(400).json({ message: 'Status não encontrado' })
  }
})

module.exports = app;