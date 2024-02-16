// src/adapters/dbAdapter.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nombredelabasededatos', 'usuario', 'contraseña', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = { sequelize };
