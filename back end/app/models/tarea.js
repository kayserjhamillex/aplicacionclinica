'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tarea = sequelize.define('Tarea', {
    titulo: DataTypes.STRING(50),
    detalle: DataTypes.STRING(250),
    fecha: DataTypes.DATE,
    UsuarioId: DataTypes.INTEGER
  }, {schema: 'public'});
  Tarea.associate = function(models) {
    Tarea.belongsTo(models.Usuario, {as: 'usuario'});
  };
  return Tarea;
};