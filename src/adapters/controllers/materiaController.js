// src/adapters/controllers/materiaController.js
const express = require('express');
const MateriaUseCase = require('../../core/useCases/materiaUseCase');
const MateriaRepositoryAdapter = require('../repositories/materiaRepositoryAdapter');

const materiaController = express.Router();
const materiaUseCase = new MateriaUseCase(new MateriaRepositoryAdapter());

materiaController.post('/materia', async (req, res) => {
    const { nombre, carrera } = req.body;

    try {
        const nuevaMateria = await materiaUseCase.crearMateria(nombre, carrera);
        res.json({
            uuid: nuevaMateria.uuid,
            nombre: nuevaMateria.nombre,
            carrera: nuevaMateria.carrera,
            estatus: nuevaMateria.estatus,
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = materiaController;
