'use strict';
module.exports = (sequelize, DataTypes) => {
  const movie = sequelize.define(
    'movie',
    {
      categoryId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      thumbnail: DataTypes.STRING,
      year: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {},
  );
  movie.associate = function (models) {
    // associations can be defined here
    movie.belongsTo(models.category), movie.hasMany(models.episode);
  };
  return movie;
};
