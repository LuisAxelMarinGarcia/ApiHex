// src/core/entities/temaEntity.js
class TemaEntity {
    constructor(uuid, nombre, identificadorMayoria, estatus = 'activo') {
        this.uuid = uuid;
        this.nombre = nombre;
        this.identificadorMayoria = identificadorMayoria;
        this.estatus = estatus;
    }
}

module.exports = TemaEntity;
