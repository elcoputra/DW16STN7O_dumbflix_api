'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    'user',
    {
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      gender: DataTypes.STRING,
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
      subscribe: DataTypes.STRING,
    },
    {}
  );
  user.associate = function (models) {
    // ini ngasih tau user harus ke target transaksi
    user.hasOne(models.transaction, {});
  };
  return user;
};
