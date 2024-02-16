// src/adapters/repositories/materiaRepositoryAdapter.js
const MateriaRepositoryPort = require('../../core/ports/materiaRepositoryPort');
const MateriaEntity = require('../../core/entities/materiaEntity');

class MateriaRepositoryAdapter extends MateriaRepositoryPort {
    async crearMateria(materiaEntity) {
        const { nombre, carrera } = materiaEntity;
        await MateriaEntity.create({ nombre, carrera }); // Usa MateriaEntity en lugar de Materia
    }
}

module.exports = MateriaRepositoryAdapter;