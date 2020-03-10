'use strict';
module.exports = (sequelize, DataTypes) => {
  const Paciente = sequelize.define('Paciente', {
    Fullname: DataTypes.STRING(100),
    Fechana: DataTypes.DATE,
    Genero: DataTypes.STRING(20),
    Tipodocumento: DataTypes.STRING(15),
    Numerodocumento: { type: DataTypes.STRING(15), unique: true },
    Email: { type: DataTypes.STRING(200), unique: true },
    Password: DataTypes.TEXT,
    Imagenpaciente: DataTypes.TEXT,
  }, {schema: 'public'});
  Paciente.associate = function(models) {
    Paciente.hasMany(models.Cita, {
      foreignKey: 'PacienteId',
    });
  };
  return Paciente;
};