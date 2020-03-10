'use strict';
module.exports = (sequelize, DataTypes) => {
  const Doctor = sequelize.define('Doctor', {
    Fullname: DataTypes.STRING(200),
    Fechana: DataTypes.DATE,
    Genero: DataTypes.STRING(20),
    Celular: DataTypes.STRING(15),
    Email: { type: DataTypes.STRING(200), unique: true },
    Imagendoctor: DataTypes.TEXT,
    Password: DataTypes.TEXT,
    Facebook: DataTypes.TEXT,
    Instagram: DataTypes.TEXT,
    Twitter: DataTypes.TEXT
  },
  {schema: 'public'});
  Doctor.associate = function(models) {
    Doctor.hasMany(models.Especialista, {
      foreignKey: 'DoctorId',
    });
  };
  return Doctor;
};