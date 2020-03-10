'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cita = sequelize.define('Cita', {
    Fechacita: DataTypes.DATE,
    //poder tener el horario, el doctor y la especilidad
    Pago:DataTypes.BOOLEAN,
    AdminId: DataTypes.INTEGER,
    PacienteId: DataTypes.INTEGER,
    HorarioId: DataTypes.INTEGER,
  }, {schema: 'public'});
  Cita.associate = function(models) {
    Cita.belongsTo(models.Admin, {as: 'admin'});
    Cita.belongsTo(models.Paciente, {as: 'paciente'});
    Cita.belongsTo(models.Horario, {as: 'horario'});
  };
  return Cita;
};