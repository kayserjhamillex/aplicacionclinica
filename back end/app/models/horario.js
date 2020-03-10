'use strict';
module.exports = (sequelize, DataTypes) => {
  const Horario = sequelize.define('Horario', {
    Dia: DataTypes.STRING,
    EspecialistaId: DataTypes.INTEGER,
    HoraId: DataTypes.INTEGER,
  }, {schema: 'public'});
  Horario.associate = function(models) {
    Horario.belongsTo(models.Especialista, {as: 'especialista'});
    Horario.belongsTo(models.Hora, {as: 'hora'});
    Horario.hasMany(models.Cita, {
      foreignKey: 'HorarioId',
    });
  };
  return Horario;
};