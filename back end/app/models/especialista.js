'use strict';
module.exports = (sequelize, DataTypes) => {
  const Especialista = sequelize.define('Especialista', {
    EspecialidadId: DataTypes.INTEGER,
    DoctorId: DataTypes.INTEGER,
  }, {schema: 'public'});
  Especialista.associate = function(models) {
    Especialista.belongsTo(models.Doctor, {as: 'doctor'});
    Especialista.belongsTo(models.Especialidad, {as: 'especialidad'});
    Especialista.hasMany(models.Horario, {
      foreignKey: 'EspecialistaId',
    });
  };
  return Especialista;
};