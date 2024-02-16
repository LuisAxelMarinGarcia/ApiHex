// src/core/entities/materiaEntity.js
class MateriaEntity {
    constructor(uuid, nombre, carrera, estatus = 'activo') {
        this.uuid = uuid;
        this.nombre = nombre;
        this.carrera = carrera;
        this.estatus = estatus;
    }

    desactivar() {
        this.estatus = 'inactivo';
    }
}

module.exports = MateriaEntity;
