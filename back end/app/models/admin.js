'use strict';
module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define('Admin', {
    Fullname: DataTypes.STRING(200),
    Fechana: DataTypes.DATE,
    Correo: { type: DataTypes.STRING(200), unique: true },
    Contrasena: DataTypes.TEXT,
    Imagenadmin: DataTypes.TEXT,
  }, {schema: 'public'});
  Admin.associate = function(models) {
    Admin.hasMany(models.Cita, {
      foreignKey: 'AdminId',
    });
  };
  return Admin;
};