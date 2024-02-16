// src/core/useCases/materiaUseCase.js
const MateriaEntity = require('../entities/materiaEntity'); // Asegúrate de tener esta línea

class MateriaUseCase {
    constructor(materiaRepository) {
        this.materiaRepository = materiaRepository;
    }

    async crearMateria(nombre, carrera) {
        // Validaciones (puedes agregar más según tus necesidades)
        if (!nombre || !carrera) {
            throw new Error('Nombre y carrera son obligatorios para crear una materia.');
        }

        // Crear la materia y agregarla al repositorio
        const nuevaMateria = new MateriaEntity(null, nombre, carrera);
        await this.materiaRepository.crearMateria(nuevaMateria);

        return nuevaMateria;
    }
}

module.exports = MateriaUseCase;
