'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          fullName: 'admin',
          isAdmin: true,
          email: 'admin@gmail.com',
          password: '$2b$10$wmowvKM6afbB421Aop7xi.6puxTz79NeU7XtctrtRQzRo9nzQYZO2',
          gender: 'male',
          phone: '083896831233',
          address: 'Jln. Marvel Universe, RT.21 RW.69',
          subscribe: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};
