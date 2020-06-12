'use strict';
module.exports = (sequelize, DataTypes) => {
  const episode = sequelize.define('episode', {
    movieId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    linkEpisode: DataTypes.STRING,
    thumbnailEpisode: DataTypes.STRING
  }, {});
  episode.associate = function(models) {
    // associations can be defined here
    episode.belongsTo(models.movie)
  };
  return episode;
};