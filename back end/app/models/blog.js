'use strict';
module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define('Blog', {
    Titulo: DataTypes.STRING(100),
    Subtitulo: DataTypes.STRING(200),
    Resumen: DataTypes.TEXT,
    Descripcion: DataTypes.TEXT,
    Imagendelblog: DataTypes.TEXT,
    Videodelblog:DataTypes.TEXT
  }, {schema: 'public'});
  return Blog;
};