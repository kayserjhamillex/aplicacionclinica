'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hora = sequelize.define('Hora', {
    Horainicio: DataTypes.STRING(15),
    Horafin: DataTypes.STRING(15)
  }, {schema: 'public'});
  Hora.associate = function(models) {
    Hora.hasMany(models.Horario, {
      foreignKey: 'HoraId',
    });
  };
  return Hora;
};