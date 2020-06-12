'use strict';
module.exports = (sequelize, DataTypes) => {
  const movie = sequelize.define('movie', {
    category: DataTypes.INTEGER,
    title: DataTypes.STRING,
    thumbnailFilm: DataTypes.STRING,
    year: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
  movie.associate = function(models) {
    // associations can be defined here
  };
  return movie;
};