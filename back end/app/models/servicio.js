'use strict';
module.exports = (sequelize, DataTypes) => {
  const Servicio = sequelize.define('Servicio', {
    Name: DataTypes.STRING(100),
    Resumen: DataTypes.TEXT,
    Descripcion: DataTypes.TEXT,
    Iconoservicio: DataTypes.TEXT,
    Imagenservicio: DataTypes.TEXT
  }, {schema: 'public'});
  return Servicio;
};