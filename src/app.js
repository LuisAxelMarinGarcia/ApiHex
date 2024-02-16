// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const dbAdapter = require('./adapters/dbAdapter');
const materiaController = require('./adapters/controllers/materiaController');

const app = express();

app.use(bodyParser.json());

app.use(materiaController);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Error interno del servidor' });
});

module.exports = app;
