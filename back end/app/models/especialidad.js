'use strict';
module.exports = (sequelize, DataTypes) => {
  const Especialidad = sequelize.define('Especialidad', {
    Name: DataTypes.STRING(100),
    Resumen: DataTypes.TEXT,
    Descripcion: DataTypes.TEXT,
    Precio: DataTypes.DECIMAL,
    Atencion: DataTypes.STRING,
    IconoEspecialidad: DataTypes.TEXT,
    ImagenEspecialidad: DataTypes.TEXT
  }, {schema: 'public'});
  Especialidad.associate = function(models) {
    Especialidad.hasMany(models.Especialista, {
      foreignKey: 'EspecialidadId',
    });
  };
  return Especialidad;
};