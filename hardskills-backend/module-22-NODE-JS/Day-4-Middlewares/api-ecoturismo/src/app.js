const express = require('express');
const morgan = require('morgan');
const activitiesRouter = require('./routes/ecoRoutes');

const app = express();
app.use(morgan('dev'));
app.use(express.static('./images'));
app.use(express.json());
app.use('/activities', activitiesRouter);

module.exports = app;