'use strict';
module.exports = (sequelize, DataTypes) => {
  const transaction = sequelize.define(
    'transaction',
    {
      startDate: DataTypes.STRING,
      dueDate: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      attachment: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {}
  );
  transaction.associate = function (models) {
    // associations can be defined here
    // di sini ngasih setting kalo ada userId di model ini
    transaction.belongsTo(models.user, {});
  };
  return transaction;
};
